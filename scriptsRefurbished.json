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
    { id: 19, name: "Intel Core i5-10400F (6 núcleos, 12 hilos)", price: 73.60, category: "refurbished", type: "processors", brand: "intel", image: "productos/cpu-i5.jpg" },
    { id: 20, name: "GTX 1660 Super", price: 128.80, category: "refurbished", type: "graphic-cards", brand: "nvidia", image: "productos/gtx-1660.jpg" },
    { id: 21, name: "B450M for Ryzen", price: 46, category: "refurbished", type: "motherboards", brand: "amd", image: "productos/b450m.jpg" },
    { id: 22, name: "DDR4 16GB (2x8GB) 3200MHz", price: 36.80, category: "refurbished", type: "ram", brand: "corsair", image: "productos/ram-ddr4.jpg" },
    { id: 23, name: "SSD NVMe 1TB Gen3", price: 46, category: "refurbished", type: "storage", brand: "samsung", image: "productos/ssd-nvme.jpg" },
    { id: 24, name: "Corsair RM750 80+ Gold", price: 73.60, category: "refurbished", type: "accessories", brand: "corsair", image: "productos/corsair-sf750.jpg" },
    { id: 25, name: "Intel Core i9 14900K", price: 650, category: "new", type: "processors", brand: "intel", image: "productos/intel-core-i9.jpg" },
    { id: 26, name: "AMD Ryzen 7 7800X3D", price: 450, category: "new", type: "processors", brand: "amd", image: "productos/amd-ryzen.jpg" },
    { id: 27, name: "Intel Core Ultra 5 245K", price: 300, category: "new", type: "processors", brand: "intel", image: "productos/intel-core-ultra.jpg" },
    { id: 28, name: "Nvidia RTX 4080 Super", price: 1200, category: "new", type: "graphic-cards", brand: "nvidia", image: "productos/nvidia-rtx-4080.jpg" },
    { id: 29, name: "Nvidia RTX 5090", price: 1800, category: "new", type: "graphic-cards", brand: "nvidia", image: "productos/nvidia-rtx-5090.jpg" },
    { id: 30, name: "AMD Radeon RX 7800 XT", price: 550, category: "new", type: "graphic-cards", brand: "amd", image: "productos/amd-raedon.jpg" },
    { id: 31, name: "Corsair Vengeance DDR5 RGB 2 x 16 GB", price: 150, category: "new", type: "ram", brand: "corsair", image: "productos/corsair-vengeance-ddr5.jpg" },
    { id: 32, name: "Kingston Fury DDR5 RGB 2 x 16 GB", price: 140, category: "new", type: "ram", brand: "kingston", image: "productos/kingstom-fury.jpg" },
    { id: 33, name: "Corsair SF750 750W SFX 80 Plus Platinum Modular", price: 160, category: "new", type: "computers", brand: "corsair", image: "productos/corsair-sf750.jpg" },
    { id: 34, name: "Nfortec Scutum X 850W 80 Plus Bronze Semi Modular", price: 100, category: "new", type: "computers", brand: "nfortec", image: "productos/nfortec-scutum.jpg" },
    { id: 35, name: "ASUS TUF Gaming B760 D5", price: 200, category: "new", type: "computers", brand: "asus", image: "productos/asus-tuf-gaming-b760-d5.jpg" },
    { id: 36, name: "Gigabyte B550 AORUS ELITE AX", price: 180, category: "new", type: "computers", brand: "gigabyte", image: "productos/gigabyte-b550-aorus-elite-ax.jpg" },
    { id: 37, name: "MSI MAG X670E TOMAHAWK WIFI", price: 350, category: "new", type: "computers", brand: "msi", image: "productos/msi-mag-x670e-tomahawk.jpg" },
    { id: 38, name: "Corsair Ellite Capellix 115i", price: 120, category: "new", type: "computers", brand: "corsair", image: "productos/corsair-ellite-capellix.jpg" },
    { id: 39, name: "Tempest Liquid Cooler 360RGB", price: 110, category: "new", type: "computers", brand: "tempest", image: "productos/tempest-liquid-cooler.jpg" }
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