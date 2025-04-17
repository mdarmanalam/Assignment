export async function fetchProducts() {
    const cacheKey = "productsCache";
    const cachedData = localStorage.getItem(cacheKey);  

    if(cachedData) {
        return JSON.parse(cachedData);
    }

    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        localStorage.setItem(cacheKey, JSON.stringify(products));
        return products;
    } catch(error) {
        console.error("Error fetching products", error);
        return [];
    }
}