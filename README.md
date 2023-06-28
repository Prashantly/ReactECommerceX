# Ecommerce React app

This project is the frontend implementation of an ecommerce website. The goal is to create a user-friendly interface that allows users to browse products, add them to the cart, and perform various operations like editing and deleting products. The project is built using React and Redux, and it communicates with a dummy ecommerce API service to retrieve and update data.(https://my-json-server.typicode.com/)

## Installation

1. Clone the repository to your local machine.
2. Open a terminal and navigate to the project directory.
3. Install the dependencies by running the following command:

   `npm install`

## Starting the Development Server

To start the development server and run the project, execute the following command:

`npm start`

This will launch the application in your default browser at http://localhost:3000.

## Functionality

### Navbar

- The navigation bar displays the cart items count to provide a quick overview to the user.
- It also includes relevant navigation links for easy navigation throughout the website.

### All Products Page

- This page lists all the products fetched from the dummy ecommerce API service.
- Each product is displayed with its details and has an "Edit" button to make inline edits.
- After editing a product, an Alert/Notification is shown to confirm the successful update.
- Each product also has a "Delete" button to remove it from the list, accompanied by an Alert/Notification for confirmation.
- A "Sort" button allows sorting the products by price. Clicking the button displays a cross button next to it, which, when clicked, removes the sorting.

### Create Page

- Clicking the "Add Product" nav-link on the navbar will navigate to create new product form and this page adds a new product to the database.
  After adding the product, an Alert/Notification is shown to indicate the successful addition.

### Product Detail Page

- This page displays all the details of a specific product.
- Users can add the product to their cart by clicking the "Add to Cart" button.

### Cart Page

- The cart page displays all the items added by the user.
- Users can view the list of products in their cart..
- Incease quantity and decrease quantity of items.

### Error Handling and Alerts

- The project handles errors that may occur during API requests and displays appropriate Alert/Notification messages to the user.

## Additional Features

### Redux Persistence

- The project implements persistent data management using Redux-persist library. This means that even after refreshing the page, the cart items and other relevant data remain intact.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Redux: A predictable state container for JavaScript apps.
- React Router: A routing library for React applications.
- Tailwind CSS: A utility-first CSS framework for creating responsive and modern web designs.

## Contributing

Contributions to this project are welcome. If you find any issues or have any suggestions for improvement, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the MIT License. Feel free to modify and use it according to your needs.
