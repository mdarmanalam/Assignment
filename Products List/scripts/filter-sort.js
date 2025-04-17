export function filterProducts(products, query, category) {
    return products.filter(p => 
        p.title.toLowerCase().includes(query.toLowerCase()) &&
        (category === "all" || p.category === category)
    );
}

export function sortProducts(products, sortValue) {
    if (sortValue === "price_asc") {
        return [...products].sort((a, b) => a.price - b.price);
    } else if (sortValue === "price_desc") {
        return [...products].sort((a, b) => b.price - a.price);
    } else if (sortValue === "price_asc_name") {
        return [...products].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortValue === "price_desc_name") {
        return [...products].sort((a, b) => b.title.localeCompare(a.title));
    }
    return products;
}
