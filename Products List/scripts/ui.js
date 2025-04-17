import { ITEMS_PER_PAGE } from "./app.js";

export function populateCategories(categories) {
    const categorySelect = document.getElementById("category");
    categorySelect.innerHTML = `<option value="all">All Categories</option>`; 
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categorySelect.appendChild(option);
    });
}

export function populateCategoriesByCheckbox(categories) {
    const categoryCheckbox = document.getElementById("category-filters");
    categories.forEach(category => {
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = category;      
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(" " + category.charAt(0).toUpperCase() + category.slice(1)));
        categoryCheckbox.appendChild(label);
    });
}

export function renderProducts(products, currentPage) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    
    products.slice(start, end).forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img data-src="${product.image}" alt="${product.title}" width="100" class="lazy-img">
            <h2>${product.title}</h2>
            <p>$${product.price}</p>
            <p><strong>${product.category}</strong></p>           
        `;
        productList.appendChild(card);
    });
}
