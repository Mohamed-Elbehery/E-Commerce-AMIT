//! Imports
import { popularProducts } from "../constants/popularProducts.js";

//! Variables
const popularProductsContainer = document.querySelector(".products");
let popularProductsList = [];

//! Functions
const windowLoad = () => {
  popularProductsList = popularProducts.map(
    (product) =>
      `
      <div class="product">
        <div>
          <img productId="${product.id}" src="${product.personImg}" alt="${product.title}" />
          <img productId="${product.id}" src="${product.img}" alt="${product.title}" />
        </div>
        <div>
          <span>${product.category}</span>
          <h3>${product.title}</h3>
          <span>${product.price}</span>
        </div>
      </div>
      `
  );

  popularProductsList.forEach((product) => {
    popularProductsContainer.innerHTML += product;
  });
};

//! Event Listeners
window.addEventListener("load", windowLoad);
