const products = [
    { id: 1, name: "iPhone 16", price: 51440, image: "iphone 16.jpg", category: "phone" },
    { id: 2, name: "Apple Watch Series 10", price: 28490, image: "apple watch.jpg", category: "watch" },
    { id: 3, name: "Apple AirPods 4", price: 11490, image: "airpods.jpg", category: "earbuds" },
    { id: 4, name: "Apple IPad 10th Gen", price: 43990, image: "ipad.jpg", category: "tablet" },
    { id: 5, name: "Gaming Headset Razer", price: 2570, image: "headset.jpg", category: "headset" },
    { id: 6, name: "iPhone 15", price: 43490, image: "iphone 15.jpg", category: "phone" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts(filter = "all", search = "") {
    const productList = $("#product-list");
    productList.empty();

    products.forEach(p => {
        const matchCategory = filter === "all" || p.category === filter;
        const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());

        if (matchCategory && matchSearch) {
            productList.append(`
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="${p.image}" class="card-img-top" alt="${p.name}">
              <div class="card-body">
                <h5 class="card-title">${p.name}</h5>
                <p class="card-text">₱${p.price}</p>
                <button class="btn btn-success add-to-cart" data-id="${p.id}">Add to Cart</button>
              </div>
            </div>
          </div>
        `);
        }
    });
}

function updateCartPage() {
    const cartList = $("#cart-items");
    let total = 0;
    cartList.empty();

    cart.forEach((item, index) => {
        cartList.append(`
        <li class="list-group-item d-flex justify-content-between align-items-center">
          ${item.name} - ₱${item.price}
          <button class="btn btn-sm btn-danger remove-item" data-index="${index}">Remove</button>
        </li>
      `);
        total += item.price;
    });

    $("#cart-total").text(total);
}

$(document).ready(() => {
    // Render products
    if ($("#product-list").length) {
        renderProducts();

        // Sidebar filter buttons
        $(".category-btn").on("click", function() {
            $(".category-btn").removeClass("active");
            $(this).addClass("active");

            const category = $(this).data("category");
            const search = $("#search").val();
            renderProducts(category, search);
        });

        // Search bar
        $("#search").on("keyup", function() {
            const search = $(this).val();
            const category = $(".category-btn.active").data("category") || "all";
            renderProducts(category, search);
        });
    }

    // Add to Cart button (event delegation)
    $(document).on("click", ".add-to-cart", function() {
        const id = $(this).data("id");
        const product = products.find(p => p.id === id);
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    });

    // Cart page logic
    if ($("#cart-items").length) {
        updateCartPage();

        // Remove item from cart
        $(document).on("click", ".remove-item", function() {
            const index = $(this).data("index");
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartPage();
        });

        // Checkout button
        $("#checkout-btn").on("click", () => {
            if (cart.length === 0) {
                alert("Your cart is empty.");
                return;
            }

            const total = cart.reduce((sum, item) => sum + item.price, 0);
            const order = {
                items: [...cart],
                total: total,
                date: new Date().toLocaleString()
            };

            const orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];
            orderHistory.push(order);
            localStorage.setItem("orderHistory", JSON.stringify(orderHistory));

            cart = [];
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Order placed successfully!");
            window.location.href = "index.html"; // ✅ Redirects to home now
        });
    }
});