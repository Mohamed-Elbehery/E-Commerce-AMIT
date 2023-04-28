//! Imports
import { popularProducts } from "../constants/popularProducts.js";
import { onSaleProducts } from "../constants/onSaleProducts.js";

//! Variables
const productsContainers = document.querySelectorAll(".products");
let popularProductsList = [];
let onSaleProductsList = [];
const menu = document.querySelector(".mobile-menu");
const menuBar = document.querySelector(".fa-bars");
const xMark = document.querySelector(".x-mark");

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
        <i class="fa-solid fa-basket-shopping"></i>
        <i class="fa-solid fa-eye"></i>
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

//! Event Listeners
window.addEventListener("load", windowLoad);
menuBar.addEventListener("click", openMobileMenu);
xMark.addEventListener("click", closeMobileMenu);
