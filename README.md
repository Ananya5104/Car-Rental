# Car Rental Service Application

## Overview

This Car Rental Service Application is designed to allow customers to search for and book cars, while administrators manage the inventory of available cars. The project includes a basic web interface and API, built using Node.js, Express, MongoDB, React, and Mongoose.

### Features

- Customer Interface: Customers can browse available cars, apply filters, and make bookings.
- Admin Interface: Admins can add, update, view, and delete car details, as well as manage customer bookings.
- Inventory Management: Admins can keep track of the car inventory with real-time updates.
- Basic Validation: Prevents double-booking of cars within the same time period.
- Filtering: Allows customers to filter cars by Make, Model, Year (MMY), fuel type, and rent range.

## Technologies Used

- Backend: Node.js, Express, Mongoose, MongoDB
- Frontend: React
- Database: MongoDB Atlas
- API Integration: RESTful API design
- Templating Engine: EJS (Embedded JavaScript)
- Version Control: Git

## Prerequisites

- Node.js (v14+)
- MongoDB (local or cloud instance)
- npm or yarn

## Setup and Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/car-rental-service.git
    cd car-rental-service
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Give MongoDB url
in server.js change the MongURI variable

4. Run the application:

    ```bash
    nodemon src/server.js
    ```

    The backend server will start on `http://localhost:5000`.

5. Access the frontend:

    - Set up your React frontend in the `/views` directory.
    - Run the frontend server to access the customer and admin dashboards.

## API Endpoints

### Car Endpoints

- POST `/addcar`  
  Add a new car to the inventory.

- GET `/cars`  
  Retrieve a list of all cars.

- PUT `/update-car/:id`  
  Update car details by ID.

- DELETE `/delete-car/:id`  
  Delete a car by ID.

### Customer Endpoints

- POST `/add-customer`  
  Add a new customer.

- GET `/customers`  
  Retrieve a list of all customers.

- PUT `/update-customer/:id`  
  Update customer details by ID.

- DELETE `/delete-customer/:id`  
  Delete a customer by ID.

## Directory Structure

```plaintext
/project-root
├── /client                # React frontend
├── /controllers           # Controllers for handling logic
│   ├── carController.js
│   └── customerController.js
├── /models                # Mongoose models
│   ├── carModel.js
│   └── customerModel.js
├── /routes                # Route handlers (optional)
├── /views                 # EJS views (for server-side rendering)
├── server.js              # Main server file
└── README.md              # Project documentation
