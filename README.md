# React E-commerce Website

This project is a full-stack e-commerce application built with React for the client-side and Node.js for the server-side. It includes features such as a shopping cart and a payment page.

## Project Structure

```
react-ecommerce-website
├── client
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   ├── components
│   │   │   ├── Cart.tsx
│   │   │   ├── ProductList.tsx
│   │   │   └── PaymentPage.tsx
│   │   ├── pages
│   │   │   ├── Home.tsx
│   │   │   ├── CartPage.tsx
│   │   │   └── Payment.tsx
│   │   ├── types
│   │   │   └── index.ts
│   │   └── utils
│   │       └── cartUtils.ts
│   ├── package.json
│   └── tsconfig.json
├── server
│   ├── src
│   │   ├── app.ts
│   │   ├── routes
│   │   │   ├── cart.ts
│   │   │   └── payment.ts
│   │   ├── controllers
│   │   │   ├── cartController.ts
│   │   │   └── paymentController.ts
│   │   └── types
│   │       └── index.ts
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js version 22.16.0
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd react-ecommerce-website
   ```

2. Navigate to the client directory and install dependencies:
   ```
   cd client
   npm install
   ```

3. Navigate to the server directory and install dependencies:
   ```
   cd ../server
   npm install
   ```

### Running the Application

1. Start the server:
   ```
   cd server
   npm start
   ```

2. Start the client:
   ```
   cd ../client
   npm start
   ```

The application should now be running on `http://localhost:3000`.

### Features

- **Product List**: Displays a list of products available for purchase.
- **Shopping Cart**: Allows users to add and remove items from their cart.
- **Payment Processing**: Integrates a payment page for processing transactions.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

### License

This project is licensed under the MIT License.