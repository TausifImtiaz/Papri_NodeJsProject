// Sample product data
const products = [
    { id: 1, name: "Gardenia", description: "Description for Product 1", price: 110, image: "../images/flower2.jpg" },
    { id: 2, name: "Rangan", description: "Description for Product 2", price: 220, image: "../images/flower3.jpg" },
    { id: 3, name: "Night Jasmin", description: "Description for Product 3", price: 130, image: "../images/folower1.jpg" }
];

// Function to generate product cards on the index page
function generateProductCards() {
    const container = document.getElementById("products-container");

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
        `;

        // Add event listener for clicking on product card
        card.addEventListener("click", () => {
            // Redirect to product page with specific product object
            localStorage.setItem("selectedProduct", JSON.stringify(product));
            window.location.href = "product.html";
        });

        container.appendChild(card);
    });
}

// Call the function to generate product cards when the page loads
window.onload = function () {
    // Check if products already exist in local storage
    const storedProducts = localStorage.getItem("products");
    if (!storedProducts) {
        // If products are not in local storage, generate product cards and store in local storage
        generateProductCards();

        // Store products in local storage
        localStorage.setItem("products", JSON.stringify(products));
    } else {
        // If products are in local storage, update product list
        updateHomePageProductList();
    }
};

// Function to retrieve products from local storage
function getProductsFromStorage() {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
        return JSON.parse(storedProducts);
    } else {
        return [];
    }
}

// Function to update the product list displayed on the index.html page
function updateHomePageProductList() {
    const productListContainer = document.getElementById("products-container");
    productListContainer.innerHTML = "";

    const products = getProductsFromStorage();

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
        `;

        // Add event listener for clicking on product card
        card.addEventListener("click", () => {
            // Redirect to product page with specific product object
            localStorage.setItem("selectedProduct", JSON.stringify(product));
            window.location.href = "product.html";
        });

        productListContainer.appendChild(card);
    });
}
