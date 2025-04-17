import { fetchProducts } from "./api.js";
import { populateCategories, populateCategoriesByCheckbox, renderProducts } from "./ui.js";
import { updatePagination } from "./pagination.js";
import { filterProducts, sortProducts } from "./filter-sort.js";
import { lazyLoadImages } from "./lazyload.js";

export const ITEMS_PER_PAGE = 6;
let products = [];
let filteredProducts = [];
let currentPage = 1;

document.addEventListener("DOMContentLoaded", async () => {
    products = await fetchProducts();
    filteredProducts = products;
    
    const categories = new Set(products.map(p => p.category));
    populateCategories(categories);
    populateCategoriesByCheckbox(categories);
    renderProducts(filteredProducts, currentPage);
    updatePagination(currentPage, filteredProducts.length, ITEMS_PER_PAGE);
    lazyLoadImages();
});

document.getElementById("search").addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const category = document.getElementById("category").value;
    filteredProducts = filterProducts(products, query, category);
    currentPage = 1;
    renderProducts(filteredProducts, currentPage);
    updatePagination(currentPage, filteredProducts.length, ITEMS_PER_PAGE);
    lazyLoadImages();
});

document.getElementById("sort").addEventListener("change", (e) => {
    filteredProducts = sortProducts(filteredProducts, e.target.value);
    currentPage = 1;
    renderProducts(filteredProducts, currentPage);
    updatePagination(currentPage, filteredProducts.length, ITEMS_PER_PAGE);
    lazyLoadImages();
});

document.getElementById("category").addEventListener("change", (e) => {
    const query = document.getElementById("search").value;
    filteredProducts = filterProducts(products, query, e.target.value);
    currentPage = 1;
    renderProducts(filteredProducts, currentPage);
    updatePagination(currentPage, filteredProducts.length, ITEMS_PER_PAGE);
    lazyLoadImages();
});

document.getElementById("category-filters").addEventListener("change", (e) => {
    const query = document.getElementById("search").value;
    filteredProducts = filterProducts(products, query, e.target.value);
    currentPage = 1;
    renderProducts(filteredProducts, currentPage);
    updatePagination(currentPage, filteredProducts.length, ITEMS_PER_PAGE);
    lazyLoadImages();
});

document.getElementById("prev").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderProducts(filteredProducts, currentPage);
        updatePagination(currentPage, filteredProducts.length, ITEMS_PER_PAGE);
    }
    lazyLoadImages();
});

document.getElementById("next").addEventListener("click", () => {
    if (currentPage < Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)) {
        currentPage++;
        renderProducts(filteredProducts, currentPage);
        updatePagination(currentPage, filteredProducts.length, ITEMS_PER_PAGE);
    }
    lazyLoadImages();
});
