const products = [
   
    { id: 19, name: "Intel Core i5-10400F (6 núcleos, 12 hilos)", price: 73.60, category: "refurbished", type: "processors", brand: "intel", image: "productos/cpu-i5.jpg" },
    { id: 20, name: "GTX 1660 Super", price: 128.80, category: "refurbished", type: "graphic-cards", brand: "nvidia", image: "productos/gtx-1660.jpg" },
    { id: 21, name: "B450M for Ryzen", price: 46, category: "refurbished", type: "motherboards", brand: "amd", image: "productos/b450m.jpg" },
    { id: 22, name: "DDR4 16GB (2x8GB) 3200MHz", price: 36.80, category: "refurbished", type: "ram", brand: "corsair", image: "productos/ram-ddr4.jpg" },
    { id: 23, name: "SSD NVMe 1TB Gen3", price: 46, category: "refurbished", type: "storage", brand: "samsung", image: "productos/ssd-nvme.jpg" },
    { id: 24, name: "Corsair RM750 80+ Gold", price: 73.60, category: "refurbished", type: "accessories", brand: "corsair", image: "productos/corsair-sf750.jpg" },
    
];

// Carrito de compras
let cart = [];
let cartCount = 0;
let cartTotal = 0;

// Función para renderizar productos
function renderProducts(filteredProducts) {
    const productsContainer = document.querySelector('.catalog-container');
    productsContainer.innerHTML = '';

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-card');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ${product.price ? product.price : 'Contact us for pricing'}€</p>
            <button>Add to Cart</button>
        `;

        // *** AQUI VA EL CODIGO ***
        const addToCartButton = productElement.querySelector('button');
        addToCartButton.addEventListener('click', () => {
            addToCart(product.id);
        });
        // *** FIN DEL CODIGO ***

        productsContainer.appendChild(productElement);
    });
}

// Función para agregar productos al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingProductIndex = cart.findIndex(item => item.product.id === productId);
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity++;
        } else {
            cart.push({ product, quantity: 1 });
        }
        cartCount++;
        cartTotal += product.price || 0;
        updateCart();
    }
}

//Carrito
document.addEventListener('DOMContentLoaded', function () {
    const cartIcon = document.getElementById('cart-icon');
    const cartDropdown = document.getElementById('cart-dropdown');
    const closeCart = document.getElementById('close-cart');

    // Abrir el carrito al hacer clic en el ícono
    cartIcon.addEventListener('click', function (e) {
        e.stopPropagation(); // Añade esta línea
        cartDropdown.classList.toggle('active');
    });

    // Cerrar el carrito al hacer clic en el botón de cerrar
    document.addEventListener('click', function (e) {
        if (!cartDropdown.contains(e.target) && !cartIcon.contains(e.target)) {
            cartDropdown.classList.remove('active');
        }
    });

    // Cerrar el carrito al hacer clic fuera de él
    document.addEventListener('click', function (e) {
        if (!cartDropdown.contains(e.target) && !cartIcon.contains(e.target)) {
            cartDropdown.classList.remove('active');
        }
    });
});

// Función para actualizar el carrito
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartCountElement = document.querySelector('.cart-count');

    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.add('cart-item');

        const productPrice = isNaN(item.product.price) ? item.product.price : item.product.price.toFixed(2) + "€";
        li.innerHTML = `
            <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-image">
            <div class="cart-item-details">
                <span class="cart-item-name">${item.product.name}</span>
                <div class="cart-item-quantity-price">
                    <div class="cart-item-quantity-controls">
                        <button onclick="decreaseQuantity(${index})">-</button>
                        <span class="cart-item-quantity">${item.quantity}</span>
                        <button onclick="increaseQuantity(${index})">+</button>
                    </div>
                    <span class="cart-item-price">${productPrice}</span>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${index})">&times;</button>
        `;
        cartItems.appendChild(li);
    });

    cartTotalElement.textContent = `${cartTotal.toFixed(2)}€`;
    cartCountElement.textContent = cartCount;
}

// Función para aumentar la cantidad de un producto
function increaseQuantity(index) {
    cart[index].quantity++;
    cartCount++;
    cartTotal += cart[index].product.price || 0;
    updateCart();
}

// Función para disminuir la cantidad de un producto
function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
        cartCount--;
        cartTotal -= cart[index].product.price || 0;
    } else {
        removeFromCart(index); // Elimina el producto si la cantidad es 0
    }
    updateCart();
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    cartCount -= cart[index].quantity;
    cartTotal -= cart[index].product.price * cart[index].quantity || 0;
    cart.splice(index, 1);
    updateCart();
}

// Función para manejar el botón de "Comprar"
document.getElementById('checkout-button').addEventListener('click', function () {
    if (cart.length === 0) {
        alert("Tu carrito está vacío. ¡Añade algunos productos antes de comprar!");
    } else {
        alert("¡Gracias por tu compra! Total: " + cartTotal.toFixed(2) + "€");
        // Vaciar el carrito después de la compra
        cart = [];
        cartCount = 0;
        cartTotal = 0;
        updateCart();
    }
});



function increaseQuantity(index) {
    cart[index].quantity++;
    cartCount++;
    cartTotal += cart[index].product.price || 0;
    updateCart();
}

function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
        cartCount--;
        cartTotal -= cart[index].product.price || 0;
    } else {
        removeFromCart(index);
    }
    updateCart();
}

function removeFromCart(index) {
    cartCount -= cart[index].quantity;
    cartTotal -= cart[index].product.price * cart[index].quantity || 0;
    cart.splice(index, 1);
    updateCart();
}

// Renderizar productos dinámicamente
function renderProducts() {
    const catalogContainer = document.querySelector('.catalog-container');
    catalogContainer.innerHTML = '';

    products.forEach(product => {
        const productPrice = isNaN(product.price) ? product.price : product.price.toFixed(2) + "€";
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ${productPrice}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        catalogContainer.appendChild(productCard);
    });
}

// Función para aplicar filtros
document.querySelector('.apply-filters').addEventListener('click', function () {
    const selectedFilters = [];
    // Obtener los filtros seleccionados
    document.querySelectorAll('.filters input[type="checkbox"]:checked').forEach(checkbox => {
        selectedFilters.push(checkbox.value);
    });
    console.log("Filtros aplicados:", selectedFilters);
    // Aquí puedes añadir la lógica para filtrar los productos
    alert("Filtros aplicados: " + selectedFilters.join(", "));
});

// Función para limpiar filtros
document.querySelector('.clear-filters').addEventListener('click', function () {
    // Desmarcar todos los checkboxes
    document.querySelectorAll('.filters input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    console.log("Filtros limpiados");
    // Aquí puedes añadir la lógica para mostrar todos los productos
    alert("Filtros limpiados");
});

// Llamar a la función para renderizar productos al cargar la página
renderProducts();

/* Llamar a la función para renderizar productos al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    renderProducts(); // Llama a la función para renderizar los productos
});*/