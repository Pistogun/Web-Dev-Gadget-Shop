# 📱 GadgetShop - E-Commerce Website

Welcome to **GadgetShop**, a simple front-end e-commerce gadget store project built using **HTML**, **CSS**, **JavaScript**, **jQuery**, and **Bootstrap 5**. This project allows users to browse products, add items to a cart, and track order history using local storage.

---

## 🗂️ Project Structure

📁 GadgetShop/
├── index.html # Home page with featured products
├── products.html # Product list with filters and search
├── cart.html # Shopping cart page
├── history.html # Order history with delete feature
├── styles.css # Custom styling
├── scripts.js # All site functionality and logic
├── 📸 images # Product images (must be in same folder)


---

## 🚀 Features

### 🏠 Home Page (`index.html`)
- Welcoming header with shop info
- Showcases 3 featured products
- "Shop Now" buttons redirect to product page

### 🛒 Products Page (`products.html`)
- Displays all products from a JavaScript array
- Category sidebar filter (Phones, Watches, etc.)
- Search bar to find products by name
- Add products to cart

### 🛍️ Cart Page (`cart.html`)
- Lists items in the cart
- Total price calculation
- Remove individual items
- Checkout to place order and clear cart

### 📜 Order History (`history.html`)
- Displays all past orders (stored in browser `localStorage`)
- Shows item count, total, and order date
- View items in each order
- Clear entire order history with one button

---

## 🧠 Technologies Used

- HTML5
- CSS3 + Bootstrap 5
- JavaScript (ES6)
- jQuery 3.7.0
- Local Storage API

---

## 🖼️ Product Images

All product images used in the site (e.g., `iphone 16.jpg`, `airpods.jpg`) must be placed **in the same folder** as your HTML and CSS files.

> Example:
> - `iphone 16.jpg`
> - `apple watch.jpg`
> - `airpods.jpg`
> - `ipad.jpg`
> - `headset.jpg`
> - `iphone 15.jpg`

---

## 📋 How to Run

1. Download or clone the project.
2. Open `index.html` in your browser.
3. Navigate through pages using the navbar.
4. Add items to your cart and simulate an order process.
5. Order data is saved in your browser’s localStorage.

---

## 🧹 Resetting Data

- To **clear your cart**, go to the **Cart page** and click "Remove" for each item or checkout.
- To **clear order history**, visit the **History page** and click "🗑️ Clear History".

---

## 📌 Notes

- This project uses `localStorage`, so all data will reset if:
  - You clear browser data
  - Use incognito/private mode
- No backend or database is used — it's 100% front-end only.

---

## 🛠️ Future Improvements (optional)
- User login/logout
- Quantity and stock control
- Product detail page per item
- Backend integration with database (e.g., Firebase or Node.js)

---

## 🙌 Author

Created by Michaelglenn Parabuac from BSIT 2.3 for final project submission in Web Development.  
Designed with Bootstrap, developed using pure front-end technologies.

---
