

# InsideOut

Development of a Direct-to-Consumer (D2C) Landing Page with Product Catalog and WhatsApp Ordering System.

## Project Overview

InsideOut is a D2C product catalog web application developed using HTML, CSS, JavaScript, and Node.js with Express.js. The project provides a responsive product catalog with category-based filtering, keyword search, and a RESTful API for product management.

---

## Features

### Frontend
- Responsive landing page
- Product catalog
- Category-based filtering
- Product search functionality
- Clean and modern UI

### Backend
- Express.js REST API
- Product CRUD operations
- Search products by keyword
- Error handling middleware
- Environment variable support

---

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Tools
- Git
- GitHub
- Postman
- VS Code

---

## Folder Structure

```
insizeout/
│
├── assets/
│   └── images/
│
├── backend/
│   ├── controllers/
│   │   └── productController.js
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── middleware/
│   │   └── errorHandler.js
│   │
│   ├── routes/
│   │   └── productRoutes.js
│   │
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── postman/
│   └── insideout-api.postman_collection.json
│
├── assets/
├── index.html
├── script.js
├── style.css
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/theanimeshkr/insizeout.git
```

### Move into Project

```bash
cd insizeout
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Create Environment File

Create a `.env` file inside the backend folder.

```
PORT=5000
```

### Start Backend Server

Development Mode

```bash
npm run dev
```

Production Mode

```bash
npm start
```

Server will run at

```
http://localhost:5000
```

---

## API Endpoints

### Get All Products

```
GET /api/products
```

---

### Get Product By ID

```
GET /api/products/:id
```

Example

```
GET /api/products/1
```

---

### Create Product

```
POST /api/products
```

Example Request Body

```json
{
  "name": "Organic Honey",
  "category": "beverages",
  "price": 350,
  "package": "500g Jar",
  "description": "Pure organic honey collected from natural farms.",
  "image": "assets/images/img_1.jpeg"
}
```

---

### Update Product

```
PUT /api/products/:id
```

---

### Delete Product

```
DELETE /api/products/:id
```

---

### Search Products

```
GET /api/products/search?q=tea
```

---

## Testing

The REST API was tested using **Postman**.

Operations tested:

- GET All Products
- GET Product by ID
- POST Product
- PUT Product
- DELETE Product
- Search Products

---

## Screenshots

### Home Page

_Add screenshot here_

---

### Product Search

_Add screenshot here_

---

### Category Filter

_Add screenshot here_

---

### API Testing (Postman)

_Add Postman screenshots here_

---

## Future Improvements

- Database Integration (MongoDB)
- User Authentication
- Admin Dashboard
- Shopping Cart
- Wishlist
- Payment Gateway
- Product Image Upload
- Pagination
- Product Reviews
- JWT Authentication

---

## Author

**Animesh Kumar**

GitHub:
https://github.com/theanimeshkr

---

## License

This project is developed for educational purposes.
