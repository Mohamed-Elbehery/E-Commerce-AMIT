//! Imports
import { popularProducts } from "../constants/popularProducts.js";
import { onSaleProducts } from "../constants/onSaleProducts.js";

//! REGEX Variables
const emailReg = /^\w+\.?(\w+)*@\w+\.\w+$/;
//! Variables
let popularProductsList = [];
let onSaleProductsList = [];
const productsContainers = document.querySelectorAll(".products");
const menu = document.querySelector(".mobile-menu");
const menuBar = document.querySelector(".fa-bars");
const xMark = document.querySelector(".x-mark");
const backdropSearch = document.querySelector("#backdrop-search");
const searchIcon = document.querySelector(".search-icon");
const backdropXmark = document.querySelector(".backdrop-xmark");
const backdropInput = document.querySelector(".backdrop-search input");
const footerForm = document.querySelector(".subscription-utils");
const footerFormInput = document.querySelector(".subscription-utils input");
const test = document.querySelector(".new-cat-bg");

//! Functions
const displayProducts = (products, productsList, index) => {
  productsList = products.map(
    (product) =>
      `
      <div class="product">
        <div>
          <img productId="${product.id}" src="${product.personImg}" alt="${product.title}" />
          <img productId="${product.id}" src="${product.img}" alt="${product.title}" />
        </div>
        <div>
          <div class="shopping-cart-tooltip">
          <i class="fa-solid fa-basket-shopping"></i>
            <span class="tooltip">Select Options</span>
          </div>
          <div class="quick-view-tooltip">
          <i class="fa-solid fa-eye"></i>
            <span class="tooltip">Quick View</span>
          </div>
        </div>
        <div>
          <span>${product.category}</span>
          <h3>${product.title}</h3>
          <span>${product.price}</span>
        </div>
      </div>
      `
  );

  productsList.forEach((product) => {
    productsContainers[index - 1].innerHTML += product;
  });
};

const windowLoad = () => {
  //* Render Popular Products
  displayProducts(popularProducts, popularProductsList, 1);

  //* Render On Sale Products
  displayProducts(onSaleProducts, onSaleProductsList, 2);
};

const openMobileMenu = () => {
  menu.style.cssText = "opacity: 1 !important;";
  menu.style.zIndex = "1000";
};

const closeMobileMenu = () => {
  menu.style.opacity = "0";
  menu.style.zIndex = "-1";
};

const displaySearchBackdrop = () => {
  backdropSearch.style.cssText = "opacity: 1; z-index: 9;";
  backdropInput.focus();
  document.body.style.overflow = "hidden";
};

const hideSearchBackdrop = () => {
  backdropSearch.style.cssText = "opacity: 0; z-index: -1; transition: 0s;";
  document.body.style.overflow = "visible";
};

const handleSubmit = (e) => {
  e.preventDefault();
  test.style.display = "none";
  if (emailReg.test(footerFormInput.value)) {
    Swal.fire({
      position: "left",
      icon: "success",
      title: "Your email has been sent",
      showConfirmButton: true,
    });
  } else {
    Swal.fire({
      title: "Invalid Email!",
      text: "Please Enter a Valid Email (dev.elbehery@gmail.com)",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};

//! Event Listeners
window.addEventListener("load", windowLoad);
menuBar.addEventListener("click", openMobileMenu);
xMark.addEventListener("click", closeMobileMenu);
searchIcon.addEventListener("click", displaySearchBackdrop);
backdropXmark.addEventListener("click", hideSearchBackdrop);
footerForm.addEventListener("submit", handleSubmit);
window.addEventListener("scroll", () => (test.style.display = "block"));
