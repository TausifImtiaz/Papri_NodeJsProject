
// Function to display details of a specific product
function displaySingleProduct(product) {
    const productDetailsContainer = document.getElementById("product-details");

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;

    const name = document.createElement("h2");
    name.textContent = product.name;

    const description = document.createElement("p");
    description.textContent = product.description;

    const price = document.createElement("p");
    price.textContent = `Price: $${product.price}`;

    const quantityLabel = document.createElement("label");
    quantityLabel.textContent = "Quantity:";
    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.value = 1;
    quantityInput.min = 1;
    quantityInput.id = "quantity";

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.addEventListener("click", () => addToCart(product, quantityInput.value));

    productDetailsContainer.appendChild(image);
    productDetailsContainer.appendChild(name);
    productDetailsContainer.appendChild(description);
    productDetailsContainer.appendChild(price);
    productDetailsContainer.appendChild(quantityLabel);
    productDetailsContainer.appendChild(quantityInput);
    productDetailsContainer.appendChild(addToCartButton);
}

// Function to display all products with Add to Cart button and quantity input
function displayAllProducts() {
    const productDetailsContainer = document.getElementById("product-details");

    products.forEach(product => {
        const productContainer = document.createElement("div");
        productContainer.classList.add("product");

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;

        const name = document.createElement("h2");
        name.textContent = product.name;

        const description = document.createElement("p");
        description.textContent = product.description;

        const price = document.createElement("p");
        price.textContent = `Price: $${product.price}`;

        const quantityLabel = document.createElement("label");
        quantityLabel.textContent = "Quantity:";
        const quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.value = 1;
        quantityInput.min = 1;
        quantityInput.id = "quantity";

        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.addEventListener("click", () => addToCart(product, quantityInput.value));

        productContainer.appendChild(image);
        productContainer.appendChild(name);
        productContainer.appendChild(description);
        productContainer.appendChild(price);
        productContainer.appendChild(quantityLabel);
        productContainer.appendChild(quantityInput);
        productContainer.appendChild(addToCartButton);

        productDetailsContainer.appendChild(productContainer);
    });
}
// Function to display product details on the product page
function displayProductDetails() {
    const productDetailsContainer = document.getElementById("product-details");

    // Retrieve the selected product from local storage
    const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

    // Check if view parameter is set to "all" in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const viewAll = urlParams.get('view') === 'all';

    if (viewAll) {
        // If view=all, display all products with Add to Cart button and quantity input
        displayAllProducts();
    } else {
        // If a specific product is selected, display its details with Add to Cart button and quantity input
        displaySingleProduct(selectedProduct);
    }
}

// Function to add the selected product to the cart
function addToCart(product, quantity) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const index = cart.findIndex(item => item.id === product.id);
    if (index !== -1) {
        // If the product is already in the cart, update the quantity
        cart[index].quantity += parseInt(quantity);
    } else {
        // If the product is not in the cart, add it
        cart.push({ id: product.id, name: product.name, price: product.price, quantity: parseInt(quantity) });
    }

    // Update the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");
}

// Call the function to display product details when the page loads
window.onload = displayProductDetails;


// Function to retrieve products from local storage
function getProductsFromStorage() {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
        return JSON.parse(storedProducts);
    } else {
        return [];
    }
}

// Function to update the product list displayed on the product.html page
function updateProductPageProductList() {
    const productListContainer = document.getElementById("product-details");
    productListContainer.innerHTML = "";

    const products = getProductsFromStorage();

    products.forEach(product => {
        const productContainer = document.createElement("div");
        productContainer.classList.add("product");

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;

        const name = document.createElement("h2");
        name.textContent = product.name;

        const description = document.createElement("p");
        description.textContent = product.description;

        const price = document.createElement("p");
        price.textContent = `Price: $${product.price}`;

        const quantityLabel = document.createElement("label");
        quantityLabel.textContent = "Quantity:";
        const quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.value = 1;
        quantityInput.min = 1;
        quantityInput.id = "quantity";

        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.addEventListener("click", () => addToCart(product, quantityInput.value));

        productContainer.appendChild(image);
        productContainer.appendChild(name);
        productContainer.appendChild(description);
        productContainer.appendChild(price);
        productContainer.appendChild(quantityLabel);
        productContainer.appendChild(quantityInput);
        productContainer.appendChild(addToCartButton);

        productListContainer.appendChild(productContainer);
    });
}

// Call the function to update the product list on page load
updateProductPageProductList();
