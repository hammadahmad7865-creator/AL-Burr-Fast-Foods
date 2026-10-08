/* =========================================
   AL BURR FAST FOOD
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   CUSTOMER
========================================= */

let customer = {
    name: "",
    phone: "",
    address: ""
};


/* =========================================
   CART
========================================= */

let cart = [];

let selectedProduct = null;

let modalQuantity = 1;


/* =========================================
   PRODUCTS
========================================= */

const products = [

    /* =====================
       PIZZA
    ===================== */

    {
        id: "pizza-special-small",
        name: "Special Pizza",
        size: "Small",
        price: 450,
        cat: "pizza",
        image: "special-pizza.jpg"
    },

    {
        id: "pizza-special-medium",
        name: "Special Pizza",
        size: "Medium",
        price: 900,
        cat: "pizza",
        image: "special-pizza.jpg"
    },

    {
        id: "pizza-special-large",
        name: "Special Pizza",
        size: "Large",
        price: 1200,
        cat: "pizza",
        image: "special-pizza.jpg"
    },

    {
        id: "pizza-special-xl",
        name: "Special Pizza",
        size: "XL",
        price: 1800,
        cat: "pizza",
        image: "special-pizza.jpg"
    },


    {
        id: "pizza-new-small",
        name: "AL BURR New Pizza",
        size: "Small",
        price: 350,
        cat: "pizza",
        image: "new-pizza.jpg"
    },

    {
        id: "pizza-new-medium",
        name: "AL BURR New Pizza",
        size: "Medium",
        price: 800,
        cat: "pizza",
        image: "new-pizza.jpg"
    },

    {
        id: "pizza-new-large",
        name: "AL BURR New Pizza",
        size: "Large",
        price: 1100,
        cat: "pizza",
        image: "new-pizza.jpg"
    },

    {
        id: "pizza-new-xl",
        name: "AL BURR New Pizza",
        size: "XL",
        price: 1600,
        cat: "pizza",
        image: "new-pizza.jpg"
    },


    {
        id: "pizza-stuffer-small",
        name: "Stuffer Pizza",
        size: "Small",
        price: 500,
        cat: "pizza",
        image: "stuffer-pizza.jpg"
    },

    {
        id: "pizza-stuffer-medium",
        name: "Stuffer Pizza",
        size: "Medium",
        price: 950,
        cat: "pizza",
        image: "stuffer-pizza.jpg"
    },

    {
        id: "pizza-stuffer-large",
        name: "Stuffer Pizza",
        size: "Large",
        price: 1250,
        cat: "pizza",
        image: "stuffer-pizza.jpg"
    },

    {
        id: "pizza-stuffer-xl",
        name: "Stuffer Pizza",
        size: "XL",
        price: 1800,
        cat: "pizza",
        image: "stuffer-pizza.jpg"
    },


    /* =====================
       BURGER
    ===================== */

    {
        id: "zinger-burger",
        name: "Zinger Burger",
        size: "",
        price: 350,
        cat: "burger",
        image: "special-burger.jpg"
    },

    {
        id: "special-burger",
        name: "AL Burr Special Burger",
        size: "",
        price: 300,
        cat: "burger",
        image: "special-burger.jpg"
    },


    /* =====================
       SHAWARMA
    ===================== */

    {
        id: "chicken-shawarma",
        name: "Chicken Shawarma",
        size: "",
        price: 150,
        cat: "shawarma",
        image: "chicken-shawarma.jpg"
    },

    {
        id: "zinger-shawarma",
        name: "Zinger Shawarma",
        size: "",
        price: 200,
        cat: "shawarma",
        image: "zinger-shawarma.jpg"
    },


    /* =====================
       SANDWICH
    ===================== */

    {
        id: "chicken-sandwich",
        name: "Chicken Sandwich",
        size: "",
        price: 250,
        cat: "sandwich",
        image: "chicken-sandwich.jpg"
    },

    {
        id: "club-sandwich",
        name: "Club Sandwich",
        size: "",
        price: 250,
        cat: "sandwich",
        image: "club-sandwich.jpg"
    },


    /* =====================
       ROLLS
    ===================== */

    {
        id: "chicken-roll",
        name: "Chicken Roll",
        size: "",
        price: 180,
        cat: "rolls",
        image: "chicken-roll.jpg"
    },

    {
        id: "zinger-roll",
        name: "Zinger Roll",
        size: "",
        price: 220,
        cat: "rolls",
        image: "zinger-roll.jpg"
    },


    /* =====================
       PASTA
    ===================== */

    {
        id: "chicken-pasta",
        name: "Chicken Pasta",
        size: "",
        price: 350,
        cat: "pasta",
        image: "chicken-pasta.jpg"
    },

    {
        id: "special-pasta",
        name: "Special Pasta",
        size: "",
        price: 400,
        cat: "pasta",
        image: "special-pasta.jpg"
    },


    /* =====================
       FRIES
    ===================== */

    {
        id: "french-fries",
        name: "French Fries",
        size: "",
        price: 180,
        cat: "fries",
        image: "french-fries.jpg"
    },

    {
        id: "loaded-fries",
        name: "Loaded Fries",
        size: "",
        price: 300,
        cat: "fries",
        image: "loaded-fries.jpg"
    }

];


/* =========================================
   CATEGORY CONTAINERS
========================================= */

const categoryContainers = {

    pizza: "pizzaProducts",

    burger: "burgerProducts",

    shawarma: "shawarmaProducts",

    sandwich: "sandwichProducts",

    rolls: "rollsProducts",

    pasta: "pastaProducts",

    fries: "friesProducts"

};


/* =========================================
   START ORDER
========================================= */

function startOrdering() {

    const name =
        document
            .getElementById("customerName")
            .value
            .trim();


    const phone =
        document
            .getElementById("customerPhone")
            .value
            .trim();


    const address =
        document
            .getElementById("customerAddress")
            .value
            .trim();


    if (!name) {

        showToast(
            "Please enter your name"
        );

        document
            .getElementById("customerName")
            .focus();

        return;
    }


    if (!phone) {

        showToast(
            "Please enter your phone number"
        );

        document
            .getElementById("customerPhone")
            .focus();

        return;
    }


    if (!address) {

        showToast(
            "Please enter your delivery address"
        );

        document
            .getElementById("customerAddress")
            .focus();

        return;
    }


    customer.name = name;

    customer.phone = phone;

    customer.address = address;


    document
        .getElementById("welcomeSmall")
        .textContent =
        "WELCOME " + name;


    document
        .getElementById("welcomeTitle")
        .textContent =
        "What would you like to eat?";


    document
        .getElementById("cartCustomerName")
        .textContent =
        customer.name;


    document
        .getElementById("cartCustomerPhone")
        .textContent =
        customer.phone;


    document
        .getElementById("cartCustomerAddress")
        .textContent =
        customer.address;
function startOrdering() {

    const name =
        document.getElementById("customerName").value.trim();

    const phone =
        document.getElementById("customerPhone").value.trim();

    const address =
        document.getElementById("customerAddress").value.trim();

    if (!name || !phone || !address) {
        showToast("Please fill all details");
        return;
    }

    customer.name = name;
    customer.phone = phone;
    customer.address = address;

    document.getElementById("cartCustomerName").textContent = name;
    document.getElementById("cartCustomerPhone").textContent = phone;
    document.getElementById("cartCustomerAddress").textContent = address;

    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("mainApp").style.display = "block";

    showPage("home");
}


/* =========================================
   SHOW PAGE
========================================= */

function showPage(pageName) {

    const pages = {

        home: "homePage",

        menu: "menuPage",

        cart: "cartPage"

    };


    Object.values(pages).forEach(
        function(pageId) {

            const page =
                document.getElementById(
                    pageId
                );

            if (page) {

                page.classList.remove(
                    "active"
                );

            }

        }
    );


    const selectedPage =
        document.getElementById(
            pages[pageName]
        );


    if (selectedPage) {

        selectedPage.classList.add(
            "active"
        );

    }


    document
        .querySelectorAll(".nav-button")
        .forEach(
            function(button) {

                button.classList.remove(
                    "active"
                );

            }
        );


    if (pageName === "home") {

        document
            .getElementById("navHome")
            .classList.add("active");

    }


    if (pageName === "menu") {

        document
            .getElementById("navMenu")
            .classList.add("active");

    }


    if (pageName === "cart") {

        document
            .getElementById("navCart")
            .classList.add("active");

        renderCart();

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   RENDER PRODUCTS
========================================= */

function renderProducts() {

    Object.keys(categoryContainers)
        .forEach(
            function(category) {

                const container =
                    document.getElementById(
                        categoryContainers[
                            category
                        ]
                    );


                if (!container) return;


                container.innerHTML = "";


                const categoryProducts =
                    products.filter(
                        function(product) {

                            return product.cat ===
                                category;

                        }
                    );


                categoryProducts.forEach(
                    function(product) {

                        const card =
                            document.createElement(
                                "div"
                            );


                        card.className =
                            "product";


                        card.onclick =
                            function() {

                                openQuantityModal(
                                    product.id
                                );

                            };


                        const image =
                            document.createElement(
                                "img"
                            );


                        image.className =
                            "product-img";


                        image.src =
                            product.image;


                        image.alt =
                            product.name;


                        image.loading =
                            "lazy";


                        const content =
                            document.createElement(
                                "div"
                            );


                        content.className =
                            "product-content";


                        const name =
                            document.createElement(
                                "div"
                            );


                        name.className =
                            "product-name";


                        name.textContent =
                            product.name;


                        content.appendChild(
                            name
                        );


                        if (product.size) {

                            const size =
                                document.createElement(
                                    "span"
                                );


                            size.className =
                                "size-badge";


                            size.textContent =
                                product.size;


                            content.appendChild(
                                size
                            );

                        }


                        const price =
                            document.createElement(
                                "div"
                            );


                        price.className =
                            "product-price";


                        price.textContent =
                            "Rs. " +
                            product.price;


                        content.appendChild(
                            price
                        );


                        const button =
                            document.createElement(
                                "button"
                            );


                        button.className =
                            "add-btn";


                        button.textContent =
                            "ADD TO CART";


                        button.onclick =
                            function(event) {

                                event.stopPropagation();

                                openQuantityModal(
                                    product.id
                                );

                            };


                        content.appendChild(
                            button
                        );


                        card.appendChild(
                            image
                        );


                        card.appendChild(
                            content
                        );


                        container.appendChild(
                            card
                        );

                    }
                );

            }
        );

}


/* =========================================
   QUANTITY MODAL
========================================= */

function openQuantityModal(productId) {

    selectedProduct =
        products.find(
            function(product) {

                return product.id ===
                    productId;

            }
        );


    if (!selectedProduct) return;


    modalQuantity = 1;


    document
        .getElementById(
            "modalProductName"
        )
        .textContent =
        selectedProduct.name +
        (
            selectedProduct.size
                ? " - " +
                    selectedProduct.size
                : ""
        );


    document
        .getElementById(
            "modalProductPrice"
        )
        .textContent =
        "Rs. " +
        selectedProduct.price;


    document
        .getElementById(
            "modalQuantity"
        )
        .textContent =
        modalQuantity;


    document
        .getElementById(
            "quantityModal"
        )
        .classList.add("show");

}


/* =========================================
   CHANGE MODAL QUANTITY
========================================= */

function changeModalQuantity(amount) {

    modalQuantity += amount;


    if (modalQuantity < 1) {

        modalQuantity = 1;

    }


    if (modalQuantity > 20) {

        modalQuantity = 20;

        showToast(
            "Maximum quantity is 20"
        );

    }


    document
        .getElementById(
            "modalQuantity"
        )
        .textContent =
        modalQuantity;

}


/* =========================================
   CLOSE QUANTITY MODAL
========================================= */

function closeQuantityModal(event) {

    const modal =
        document.getElementById(
            "quantityModal"
        );


    if (
        event &&
        event.target !== modal
    ) {

        return;

    }


    modal.classList.remove(
        "show"
    );


    selectedProduct = null;

}


/* =========================================
   ADD TO CART
========================================= */

function addSelectedToCart() {

    if (!selectedProduct) return;


    const existingItem =
        cart.find(
            function(item) {

                return item.id ===
                    selectedProduct.id;

            }
        );


    if (existingItem) {

        existingItem.quantity +=
            modalQuantity;

    }

    else {

        cart.push({

            id:
                selectedProduct.id,

            name:
                selectedProduct.name,

            size:
                selectedProduct.size ||
                "",

            price:
                selectedProduct.price,

            image:
                selectedProduct.image,

            quantity:
                modalQuantity

        });

    }


    document
        .getElementById(
            "quantityModal"
        )
        .classList.remove(
            "show"
        );


    selectedProduct = null;


    updateCartCount();

    renderCart();


    showToast(
        "Added to cart successfully"
    );

}


/* =========================================
   CART COUNT
========================================= */

function updateCartCount() {

    const totalItems =
        cart.reduce(
            function(total, item) {

                return total +
                    item.quantity;

            },
            0
        );


    const topCount =
        document.getElementById(
            "topCartCount"
        );


    if (topCount) {

        topCount.textContent =
            totalItems;

    }

}


/* =========================================
   RENDER CART
========================================= */

function renderCart() {

    const container =
        document.getElementById(
            "cartItems"
        );


    const summary =
        document.getElementById(
            "cartSummary"
        );


    if (!container) return;


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h3>
                    Your Cart is Empty
                </h3>

                <p>
                    Add some delicious food
                    to your cart.
                </p>

            </div>

        `;


        if (summary) {

            summary.style.display =
                "none";

        }


        return;

    }


    container.innerHTML = "";


    let total = 0;


    cart.forEach(
        function(item, index) {

            const itemTotal =
                item.price *
                item.quantity;


            total += itemTotal;


            const cartItem =
                document.createElement(
                    "div"
                );


            cartItem.className =
                "cart-item";


            const image =
                document.createElement(
                    "img"
                );


            image.className =
                "cart-item-img";


            image.src =
                item.image;


            image.alt =
                item.name;


            const info =
                document.createElement(
                    "div"
                );


            info.className =
                "cart-item-info";


            const name =
                document.createElement(
                    "div"
                );


            name.className =
                "cart-item-name";


            name.textContent =
                item.name +
                (
                    item.size
                        ? " - " +
                            item.size
                        : ""
                );


            const price =
                document.createElement(
                    "div"
                );


            price.className =
                "cart-item-price";


            price.textContent =
                "Rs. " +
                itemTotal;


            info.appendChild(name);
                      info.appendChild(price);

            const controls =
                document.createElement("div");

            controls.className =
                "cart-controls";

            const minus =
                document.createElement("button");

            minus.textContent = "−";

            minus.onclick = function () {
                changeCartQuantity(
                    item.id,
                    -1
                );
            };

            const qty =
                document.createElement("span");

            qty.textContent =
                item.quantity;

            const plus =
                document.createElement("button");

            plus.textContent = "+";

            plus.onclick = function () {
                changeCartQuantity(
                    item.id,
                    1
                );
            };

            controls.appendChild(minus);
            controls.appendChild(qty);
            controls.appendChild(plus);

            card.appendChild(image);
            card.appendChild(info);
            card.appendChild(controls);

            cartItems.appendChild(card);
        });
    }

    cartSummary.style.display =
        cart.length ? "block" : "none";

    subtotal.textContent =
        "Rs. " + getCartTotal();

    totalPrice.textContent =
        "Rs. " + getCartTotal();
}

function changeCartQuantity(id, change) {

    const item = cart.find(
        function (product) {
            return product.id === id;
        }
    );

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(
            function (product) {
                return product.id !== id;
            }
        );
    }

    updateCartCount();
    renderCart();
}


function getCartTotal() {

    return cart.reduce(
        function (total, item) {
            return total +
                (item.price * item.quantity);
        },
        0
    );
}


function updateCartCount() {

    const count = cart.reduce(
        function (total, item) {
            return total + item.quantity;
        },
        0
    );

    document.getElementById(
        "cartCount"
    ).textContent = count;
}

function placeWhatsAppOrder() {

    if (cart.length === 0) {
        showToast("Cart is empty");
        return;
    }

    let message =
        "🍔 AL BURR FAST FOOD\n\n";

    message +=
        "👤 Name: " +
        customer.name + "\n";

    message +=
        "📱 Phone: " +
        customer.phone + "\n";

    message +=
        "📍 Address: " +
        customer.address + "\n\n";

    message += "🛒 ORDER:\n";

    cart.forEach(function (item) {

        message +=
            "• " +
            item.name +
            " x " +
            item.quantity +
            " = Rs. " +
            (item.price * item.quantity) +
            "\n";
    });

    message +=
        "\n💰 TOTAL: Rs. " +
        getCartTotal();

    const whatsappNumber =
        "923070000166";

    const url =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");
}
function openMenuImage(imageName) {

    const modal =
        document.getElementById("imageModal");

    const image =
        document.getElementById("largeMenuImage");

    image.src = imageName;

    modal.style.display = "flex";
}


function closeMenuImage() {

    document.getElementById(
        "imageModal"
    ).style.display = "none";
}


function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 2500);
}


document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderProducts();

        updateCartCount();

        renderCart();

    }
);

function renderProducts() {

    products.forEach(function(product) {

        const container =
            document.getElementById(
                categoryContainers[product.cat]
            );

        if (!container) return;

        const card =
            document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}">
            <div class="product-info">
                <h3>${product.name}</h3>
                ${
                    product.size
                    ? `<p>${product.size}</p>`
                    : ""
                }
                <strong>Rs. ${product.price}</strong>
                <button
                    onclick="openQuantityModal('${product.id}')">
                    Add to Cart
                </button>
            </div>
        `;

        container.appendChild(card);
    });
}

           
