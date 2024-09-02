# E-Commerce Dashboard

The **E-Commerce Dashboard** is a comprehensive web application developed using the MERN stack (MongoDB, Express, React, Node.js). This dashboard provides essential functionalities for managing an e-commerce platform, including product search, user authentication, and product management.

## Features

- **Product Search**: Users can search for products based on various criteria, making it easier to find items within the inventory.
  
- **User Authentication**: Implemented secure authentication using JWT (JSON Web Tokens) to ensure that only registered users can access the dashboard functionalities.

- **User Signup and Login**: New users can sign up, and existing users can log in to access their account and dashboard features.

- **Product Management**: Users can add, update, and manage products within the dashboard.

- **RESTful API Integration**: The backend consists of 8 RESTful APIs that handle various operations, from user management to product searches.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## API Endpoints

The project includes the following API endpoints:

1. **User Signup**: `POST /api/signup` - Allows new users to create an account.
2. **User Login**: `POST /api/login` - Allows existing users to log in.
3. **Get All Products**: `GET /api/products` - Retrieves a list of all products.
4. **Search Products**: `GET /api/products/search` - Allows users to search for products.
5. **Get Product by ID**: `GET /api/products/:id` - Retrieves a specific product by its ID.
6. **Add New Product**: `POST /api/products` - Allows authorized users to add a new product.
7. **Update Product**: `PUT /api/products/:id` - Allows authorized users to update an existing product.
8. **Delete Product**: `DELETE /api/products/:id` - Allows authorized users to delete a product.
