const products = [
    { id: 1, name: "Intel 8086 Processor (1980s)", price: 110, category: "vintage", type: "processors", brand: "intel", image: "productos/intel-80286.jpg" },
    { id: 2, name: "IBM PC XT/AT Motherboard (1980s)", price: 350, category: "vintage", type: "motherboards", brand: "ibm", image: "productos/IBM_PC_Motherboard_(1981).jpg" },
    { id: 3, name: "Commodore 64 (keyboard and case)", price: 250, category: "vintage", type: "consoles", brand: "commodore", image: "productos/Commodore64.jpg" },
    { id: 4, name: "Apple II Computer", price: 4500, category: "vintage", type: "consoles", brand: "apple", image: "productos/Apple_II.jpg" },
    { id: 5, name: "Apple Lisa", price: 3500, category: "vintage", type: "consoles", brand: "apple", image: "productos/ComputerApple Lisa.jpg" },
    { id: 6, name: "Hard drive (RLL)", price: 350, category: "vintage", type: "storage", brand: "ibm", image: "productos/Hard drive (RLL).jpg" },
    { id: 7, name: "Hard drive (SCSI)", price: 200, category: "vintage", type: "storage", brand: "ibm", image: "productos/Hard drive (SCSI).jpg" },
    { id: 8, name: "Hard drive (MFM)", price: 300, category: "vintage", type: "storage", brand: "ibm", image: "productos/hard-drive-mfm.jpg" },
    { id: 9, name: "3dfx Voodoo Graphic Card", price: 450, category: "vintage", type: "graphic-cards", brand: "nvidia", image: "productos/3dfx-voodoo.jpg" },
    { id: 10, name: "Nintendo NES (with wires and remote control)", price: 100, category: "retro", type: "consoles", brand: "nintendo", image: "productos/nes.jpg" },
    { id: 11, name: "Sega Mega Drive (1st version)", price: 70, category: "retro", type: "consoles", brand: "sega", image: "productos/sega-mega-drive.jpg" },
    { id: 12, name: "Classic Video Game Cartridges (Super Mario Bros, Zelda)", price: 200, category: "retro", type: "accessories", brand: "nintendo", image: "productos/super-mario-bros.jpg" },
    { id: 13, name: "Game Boy (model DMG-01)", price: 150, category: "retro", type: "consoles", brand: "nintendo", image: "productos/game-boy.jpg" },
    { id: 14, name: "Floppy Disk Drives, CRT Monitors, and Mechanical Keyboard", price: 300, category: "vintage", type: "accessories", brand: "ibm", image: "productos/floppy-disk-drive.jpg" },
    { id: 15, name: "Vintage Mice and Cables/Adapters", price: 5, category: "vintage", type: "accessories", brand: "ibm", image: "productos/vintage-mice.jpg" },
    { id: 16, name: "RAM (EDO, SIMM, SDRAM)", price: 50, category: "vintage", type: "ram", brand: "ibm", image: "productos/ram.jpg" },
    { id: 17, name: "Chips ROM/EPROM", price: 10, category: "vintage", type: "components", brand: "ibm", image: "productos/rom.jpg" },
    { id: 18, name: "Capacitors, Resistors, and Connectors", price: 10, category: "vintage", type: "components", brand: "ibm", image: "productos/capacitors.jpg" },

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
        alert("Your cart is empty. Add some products before purchasing!");
    } else {
        alert(`Thank you for your purchase! Total: ${cartTotal.toFixed(2)}€`);
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