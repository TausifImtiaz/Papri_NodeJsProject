# Papri Node.js Project

## Overview

The **Papri Node.js Project** is a Node.js application designed to demonstrate the functionality of a basic e-commerce website. This project showcases e-commerce features including product display, cart management, order processing, and CRUD operations for product management. Data is stored in the browser's local storage to manage cart and order details, while CRUD operations are handled by the Node.js backend.

## Features

- **E-Commerce Functionality:** Simulates core e-commerce features such as product display, cart management, and order processing.
- **CRUD Operations:** Provides Create, Read, Update, and Delete operations for managing products in the inventory.
- **Local Storage Integration:** Uses browser local storage to store cart and order data, allowing lightweight data management without server-side storage.
- **Node.js Backend:** Implements a Node.js and Express.js backend to serve the application, handle API requests, and manage CRUD operations.

## Technologies Used

- Node.js
- Express.js (for server-side functionality)
- HTML/CSS/JavaScript (for client-side interface)
- Local Storage (for data persistence)

## Project Structure

- **Backend:** Contains Node.js and Express.js code for serving the application, handling API requests, and managing CRUD operations.
- **Frontend:** HTML, CSS, and JavaScript files for the user interface and client-side functionality.
- **Local Storage:** Data storage mechanism using browser local storage to persist cart and order information.

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm (Node Package Manager)

### Cloning the Repository

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/TausifImtiaz/Papri_NodeJsProject.git
   ```

### Installation

1. **Navigate to the Project Directory:**
   ```bash
   cd Papri_NodeJsProject
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

### Running the Application

1. **Start the Server:**
   ```bash
   npm start
   ```

2. **Access the Application:**
   - Open a web browser and navigate to `http://localhost:3000` (or the port specified in your configuration) to view the e-commerce site.

### Using the Application

1. **Browse Products:**
   - View and interact with the list of available products.

2. **Manage Cart:**
   - Add products to your cart, view cart contents, and proceed to checkout.

3. **Place Orders:**
   - Review and place orders. Order details are saved in local storage.

4. **CRUD Operations:**
   - **Create:** Add new products to the inventory.
   - **Read:** View product details.
   - **Update:** Modify existing product information.
   - **Delete:** Remove products from the inventory.

## Usage

1. **Local Storage Management:**
   - The application uses local storage to manage cart items and order details.
   - Use browser developer tools to inspect and manage local storage data if needed.

2. **Product Management:**
   - CRUD operations for products are managed through the backend API.
   - Use the provided frontend interfaces to perform these operations.

## Contributing

Contributions are welcome! To contribute:
- Fork the repository.
- Create a feature branch.
- Commit your changes.
- Push to the branch.
- Open a pull request with a description of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Node.js and Express.js documentation
- Local Storage API references
- E-commerce design resources

## Contact

For any questions or support, please contact [Tausif Imtiaz](mailto:tausifimtiaz@gmail.com).
