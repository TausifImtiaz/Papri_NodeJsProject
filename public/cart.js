// Function to display cart items
function displayCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    // Clear previous items
    cartItemsContainer.innerHTML = "";

    // Retrieve cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;

    // Iterate over cart items and display them in the table
    cartItems.forEach(item => {
        const row = document.createElement("tr");

        const productName = document.createElement("td");
        productName.textContent = item.name;

        const productPrice = document.createElement("td");
        productPrice.textContent = `$${item.price}`;

        const quantity = document.createElement("td");
        quantity.textContent = item.quantity;

        const totalPrice = document.createElement("td");
        const totalAmount = item.price * item.quantity;
        totalPrice.textContent = `$${totalAmount}`;
        total += totalAmount;

        const removeButtonCell = document.createElement("td");
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => removeItemFromCart(item.id));
        removeButtonCell.appendChild(removeButton);

        row.appendChild(productName);
        row.appendChild(productPrice);
        row.appendChild(quantity);
        row.appendChild(totalPrice);
        row.appendChild(removeButtonCell);

        cartItemsContainer.appendChild(row);
    });

    // Update total cart price
    cartTotalElement.textContent = `Total: $${total}`;
}

// Function to remove an item from the cart
function removeItemFromCart(productId) {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Filter out the item with the specified productId
    cartItems = cartItems.filter(item => item.id !== productId);

    // Update the cart items in local storage
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // Update the displayed cart items
    displayCart();
}

// Function to place order and display order details in modal
function placeOrder() {
    // Retrieve cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Display order modal
    const orderModal = document.getElementById("order-modal");
    orderModal.style.display = "block";

    // Display order items in the modal
    const orderListContainer = document.getElementById("order-list");
    orderListContainer.innerHTML = "";

    cartItems.forEach(item => {
        const orderItemDiv = document.createElement("div");
        orderItemDiv.textContent = `${item.name} - Quantity: ${item.quantity}`;
        orderListContainer.appendChild(orderItemDiv);
    });
}

// Function to generate a unique order ID
function generateOrderId() {
    // Generate a random string as the order ID
    return Math.random().toString(36).substr(2, 9); // Example of generating a random string
}

// Function to confirm order
function confirmOrder() {
    // Generate a unique order ID
    const orderId = generateOrderId();

    // Retrieve cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Create the order object with the cart items and order ID
    const order = {
        id: orderId,
        items: cartItems,
        /*        status: "Pending"*/ // Initial status of the order
    };

    // Retrieve orders from local storage
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    // Add the new order to the list of orders
    orders.push(order);

    // Update orders in local storage
    localStorage.setItem("orders", JSON.stringify(orders));

    // Clear the cart after placing the order
    localStorage.removeItem("cart");

    // Display confirmation message to the user
    alert("Your order has been placed! Order ID: " + orderId);

    // Redirect or perform any other necessary actions

    // Hide the order modal
    const orderModal = document.getElementById("order-modal");
    orderModal.style.display = "none";
}

// Event listeners
document.getElementById("place-order-btn").addEventListener("click", placeOrder);
document.getElementById("confirm-order-btn").addEventListener("click", confirmOrder);

// Call the function to display cart items when the page loads
window.onload = displayCart;
