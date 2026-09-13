/* =====================================
   ÉLORA — JAVASCRIPT
   ===================================== */

/* ---------- PRODUCTS ---------- */

const products = [
    {
        id: 1,
        name: "Luna Ring",
        category: "rings",
        price: 1299,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=85",
        description: "A delicate ring with a timeless, minimal design."
    },
    {
        id: 2,
        name: "Siena Ring",
        category: "rings",
        price: 1499,
        image: "https://images.unsplash.com/photo-1603561596112-db1d6f6d4a36?auto=format&fit=crop&w=800&q=85",
        description: "Elegant and effortless, made for everyday styling."
    },
    {
        id: 3,
        name: "Serena Necklace",
        category: "necklaces",
        price: 1899,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=85",
        description: "A refined necklace designed to layer beautifully."
    },
    {
        id: 4,
        name: "Amara Pendant",
        category: "necklaces",
        price: 1699,
        image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=85",
        description: "A subtle pendant with a sophisticated silhouette."
    },
    {
        id: 5,
        name: "Pearl Drop",
        category: "earrings",
        price: 1399,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=85",
        description: "Classic pearl-inspired earrings with a modern finish."
    },
    {
        id: 6,
        name: "Nova Hoops",
        category: "earrings",
        price: 1199,
        image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=800&q=85",
        description: "Minimal hoops made for effortless everyday looks."
    },
    {
        id: 7,
        name: "Elara Bracelet",
        category: "bracelets",
        price: 1599,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=85",
        description: "A graceful bracelet with a clean and elegant finish."
    },
    {
        id: 8,
        name: "Aurelia Chain",
        category: "bracelets",
        price: 1799,
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=85",
        description: "A delicate chain bracelet for everyday elegance."
    },
    {
        id: 9,
        name: "Celeste Ring",
        category: "rings",
        price: 1399,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=85",
        description: "A refined statement ring with a soft silhouette."
    },
    {
        id: 10,
        name: "Iris Necklace",
        category: "necklaces",
        price: 2099,
        image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=85",
        description: "An elegant necklace designed to elevate simple outfits."
    },
    {
        id: 11,
        name: "Muse Earrings",
        category: "earrings",
        price: 1299,
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=85",
        description: "Beautiful everyday earrings with a delicate presence."
    },
    {
        id: 12,
        name: "Sol Bracelet",
        category: "bracelets",
        price: 1499,
        image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=800&q=85",
        description: "A minimal bracelet designed for effortless layering."
    }
];


/* ---------- ELEMENTS ---------- */

const productGrid = document.getElementById("productGrid");
const cartBtn = document.getElementById("cartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

const searchBtn = document.getElementById("searchBtn");
const searchOverlay = document.getElementById("searchOverlay");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

const wishlistCount = document.getElementById("wishlistCount");

const productModal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalContent = document.getElementById("modalContent");

const toast = document.getElementById("toast");


/* ---------- CART ---------- */

let cart = JSON.parse(localStorage.getItem("eloraCart")) || [];

let wishlist = JSON.parse(localStorage.getItem("eloraWishlist")) || [];


/* ---------- DISPLAY PRODUCTS ---------- */

function displayProducts(list) {

    if (!productGrid) return;

    productGrid.innerHTML = "";

    if (list.length === 0) {

        productGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align:center; padding:60px 0;">
                <h3>No jewelry found.</h3>
                <p>Try another search.</p>
            </div>
        `;

        return;
    }

    list.forEach(product => {

        const isWishlisted = wishlist.includes(product.id);

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <div class="product-actions">

                    <button
                        class="wishlist-product"
                        onclick="toggleWishlist(${product.id})"
                        aria-label="Add to wishlist"
                    >
                        <i class="${isWishlisted ? "fa-solid" : "fa-regular"} fa-heart"></i>
                    </button>

                </div>

            </div>

            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>${product.name}</h3>

                <div class="product-price">
                    ₹${product.price.toLocaleString("en-IN")}
                </div>

                <button
                    class="product-btn"
                    onclick="openProduct(${product.id})"
                >
                    View Product
                </button>

            </div>
        `;

        productGrid.appendChild(card);
    });
}


/* ---------- CATEGORY FILTER ---------- */

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.category;

        if (category === "all") {
            displayProducts(products);
        } else {
            const filtered = products.filter(
                product => product.category === category
            );

            displayProducts(filtered);
        }

    });

});


/* ---------- WISHLIST ---------- */

function toggleWishlist(id) {

    if (wishlist.includes(id)) {

        wishlist = wishlist.filter(item => item !== id);

        showToast("Removed from wishlist.");

    } else {

        wishlist.push(id);

        showToast("Added to wishlist.");

    }

    localStorage.setItem(
        "eloraWishlist",
        JSON.stringify(wishlist)
    );

    updateWishlistCount();

    displayProducts(products);
}


function updateWishlistCount() {

    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }

}


/* ---------- OPEN PRODUCT ---------- */

function openProduct(id) {

    const product = products.find(item => item.id === id);

    if (!product) return;

    modalContent.innerHTML = `

        <div class="modal-product">

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div>

                <span class="product-category">
                    ${product.category}
                </span>

                <h2>${product.name}</h2>

                <strong>
                    ₹${product.price.toLocaleString("en-IN")}
                </strong>

                <p>
                    ${product.description}
                </p>

                <button
                    class="modal-add"
                    onclick="addToCart(${product.id})"
                >
                    Add to Bag
                </button>

            </div>

        </div>
    `;

    productModal.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* ---------- CLOSE PRODUCT ---------- */

function closeProductModal() {

    productModal.classList.remove("active");

    document.body.style.overflow = "";

}

if (modalClose) {
    modalClose.addEventListener("click", closeProductModal);
}

if (productModal) {

    productModal.addEventListener("click", event => {

        if (event.target === productModal) {
            closeProductModal();
        }

    });

}


/* ---------- ADD TO CART ---------- */

function addToCart(id) {

    const product = products.find(item => item.id === id);

    if (!product) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    saveCart();

    updateCart();

    showToast(`${product.name} added to your bag.`);

    closeProductModal();

    openCart();
}


/* ---------- SAVE CART ---------- */

function saveCart() {

    localStorage.setItem(
        "eloraCart",
        JSON.stringify(cart)
    );

}


/* ---------- UPDATE CART ---------- */

function updateCart() {

    if (!cartItems) return;

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your bag is currently empty.
            </p>
        `;

    } else {

        cart.forEach(item => {

            const cartItem = document.createElement("div");

            cartItem.className = "cart-item";

            cartItem.innerHTML = `

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

                <div class="cart-item-info">

                    <h4>${item.name}</h4>

                    <p>
                        ₹${item.price.toLocaleString("en-IN")}
                    </p>

                    <p>
                        Quantity: ${item.quantity}
                    </p>

                    <button
                        class="remove-item"
                        onclick="removeFromCart(${item.id})"
                    >
                        Remove
                    </button>

                </div>
            `;

            cartItems.appendChild(cartItem);

        });

    }

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const quantity = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    if (cartTotal) {
        cartTotal.textContent =
            `₹${total.toLocaleString("en-IN")}`;
    }

    if (cartCount) {
        cartCount.textContent = quantity;
    }

}


/* ---------- REMOVE FROM CART ---------- */

function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart();

    updateCart();

    showToast("Item removed from your bag.");

}


/* ---------- CART OPEN/CLOSE ---------- */

function openCart() {

    cartDrawer.classList.add("active");
    cartOverlay.classList.add("active");

    document.body.style.overflow = "hidden";

}

function closeCartDrawer() {

    cartDrawer.classList.remove("active");
    cartOverlay.classList.remove("active");

    document.body.style.overflow = "";

}


if (cartBtn) {
    cartBtn.addEventListener("click", openCart);
}

if (closeCart) {
    closeCart.addEventListener("click", closeCartDrawer);
}

if (cartOverlay) {
    cartOverlay.addEventListener("click", closeCartDrawer);
}


/* ---------- SEARCH ---------- */

if (searchBtn) {

    searchBtn.addEventListener("click", () => {

        searchOverlay.classList.add("active");

        document.body.style.overflow = "hidden";

        setTimeout(() => {
            searchInput.focus();
        }, 100);

    });

}


if (closeSearch) {

    closeSearch.addEventListener("click", () => {

        searchOverlay.classList.remove("active");

        document.body.style.overflow = "";

        searchInput.value = "";

        displayProducts(products);

    });

}


/* ---------- SEARCH PRODUCTS ---------- */

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const query = searchInput.value
            .toLowerCase()
            .trim();

        if (!query) {

            displayProducts(products);

            return;

        }

        const results = products.filter(product =>

            product.name.toLowerCase().includes(query) ||

            product.category.toLowerCase().includes(query)

        );

        displayProducts(results);

    });

}


/* ---------- MOBILE MENU ---------- */

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.add("active");

        document.body.style.overflow = "hidden";

    });

}


if (closeMenu) {

    closeMenu.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        document.body.style.overflow = "";

    });

}


document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        document.body.style.overflow = "";

    });

});


/* ---------- NEWSLETTER ---------- */

const newsletterForm =
    document.getElementById("newsletterForm");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", event => {

        event.preventDefault();

        const email =
            document.getElementById("emailInput").value;

        if (email) {

            showToast("Thank you for joining ÉLORA.");

            newsletterForm.reset();

        }

    });

}


/* ---------- TOAST ---------- */

let toastTimer;

function showToast(message) {

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* ---------- CHECKOUT ---------- */

const checkoutBtn =
    document.querySelector(".checkout-btn");

if (checkoutBtn) {

    checkoutBtn.addEventListener("click", () => {

        if (cart.length === 0) {

            showToast("Your bag is empty.");

        } else {

            showToast(
                "Checkout will be available soon."
            );

        }

    });

}


/* ---------- INITIAL LOAD ---------- */

displayProducts(products);

updateCart();

updateWishlistCount();


/* ---------- ESCAPE KEY ---------- */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        if (productModal.classList.contains("active")) {
            closeProductModal();
        }

        if (searchOverlay.classList.contains("active")) {

            searchOverlay.classList.remove("active");

            document.body.style.overflow = "";

        }

        if (mobileMenu.classList.contains("active")) {

            mobileMenu.classList.remove("active");

            document.body.style.overflow = "";

        }

        if (cartDrawer.classList.contains("active")) {
            closeCartDrawer();
        }

    }

});