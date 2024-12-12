<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
=======
# Product List with Cart

This project is a dynamic product list with a functional cart system built using **React**. It allows users to browse products, manage a cart, and see a confirmation modal upon placing an order. The application features responsive design and interactive elements for an enhanced user experience.

## Features

- **Product Listing**: Displays a list of products dynamically loaded from a `data.json` file.
- **Cart Management**:
  - Add items to the cart.
  - Increase or decrease the quantity of items in the cart.
  - Remove items from the cart.
- **Order Confirmation Modal**:
  - Displays a message confirming the order along with the products in the cart.
  - Includes a "Start New Order" button to reset the cart.
  - Fully responsive design for different screen sizes.
- **Start New Order**: Clears the cart and prepares for a new order.

## Technologies Used

- **React**: For building the user interface with components.
- **JavaScript (ES6+)**: For application logic and state management.
- **CSS3**: For styling and responsive design.
- **JSON**: For dynamic product data.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/Product-List-with-Cart.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Product-List-with-Cart
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5173/` to view the application.

## Usage

1. Browse the product list displayed on the main page.
2. Add items to the cart by clicking the "Add to Cart" button.
3. Adjust the quantities or remove items directly from the cart.
4. Click "Confirm Order" to place your order and view the confirmation modal:
   - The modal displays the products in the cart and the total cost.
   - Use the "Start New Order" button to reset the cart and begin again.

## Responsive Design

This project is designed to be fully responsive:
- Mobile devices (<768px)
- Tablets (768px - 1024px)
- Desktops (>1024px)

### Example CSS Media Query:
```css
@media (max-width: 768px) {
  .cart {
    width: 100%;
    padding: 1rem;
  }
}
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any changes.


## Acknowledgments

- Thanks to the open-source community for inspiration and guidance.
- Special thanks to the Frontend Mentor challenge for the idea.
>>>>>>> 02d5c98ec0d9e05367f22868df3818a835169d85
