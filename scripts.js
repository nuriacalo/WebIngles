// Datos de productos
const products = [
    { id: 1, name: "Intel 8086 Processor (1980s)", price: 110, category: "vintage", type: "processors", brand: "intel", image: "intel-8086.jpg" },
    { id: 2, name: "IBM PC XT/AT Motherboard (1980s)", price: 350, category: "vintage", type: "motherboards", brand: "ibm", image: "ibm-pc-xt-at.jpg" },
    { id: 3, name: "Commodore 64 (keyboard and case)", price: 250, category: "vintage", type: "consoles", brand: "commodore", image: "commodore-64.jpg" },
    { id: 4, name: "Apple II Computer", price: 4500, category: "vintage", type: "consoles", brand: "apple", image: "apple-ii.jpg" },
    { id: 5, name: "Apple Lisa", price: 3500, category: "vintage", type: "consoles", brand: "apple", image: "apple-lisa.jpg" },
    { id: 6, name: "Hard drive (RLL)", price: 350, category: "vintage", type: "storage", brand: "ibm", image: "hard-drive-rll.jpg" },
    { id: 7, name: "Hard drive (SCSI)", price: 200, category: "vintage", type: "storage", brand: "ibm", image: "hard-drive-scsi.jpg" },
    { id: 8, name: "Hard drive (MFM)", price: 300, category: "vintage", type: "storage", brand: "ibm", image: "hard-drive-mfm.jpg" },
    { id: 9, name: "3dfx Voodoo Graphic Card", price: 450, category: "vintage", type: "graphic-cards", brand: "nvidia", image: "3dfx-voodoo.jpg" },
    { id: 10, name: "Nintendo NES (with wires and remote control)", price: 100, category: "retro", type: "consoles", brand: "nintendo", image: "nintendo-nes.jpg" },
    { id: 11, name: "Sega Mega Drive (1st version)", price: 70, category: "retro", type: "consoles", brand: "sega", image: "sega-mega-drive.jpg" },
    { id: 12, name: "Classic Video Game Cartridges (Super Mario Bros, Zelda)", price: 200, category: "retro", type: "accessories", brand: "nintendo", image: "classic-video-games.jpg" },
    { id: 13, name: "Game Boy (model DMG-01)", price: 150, category: "retro", type: "consoles", brand: "nintendo", image: "game-boy.jpg" },
    { id: 14, name: "Floppy Disk Drives, CRT Monitors, and Mechanical Keyboard", price: 300, category: "vintage", type: "accessories", brand: "ibm", image: "floppy-disk.jpg" },
    { id: 15, name: "Vintage Mice and Cables/Adapters", price: 5, category: "vintage", type: "accessories", brand: "ibm", image: "mouse-vintage.jpg" },
    { id: 16, name: "RAM (EDO, SIMM, SDRAM)", price: 50, category: "vintage", type: "ram", brand: "ibm", image: "ram.jpg" },
    { id: 17, name: "Chips ROM/EPROM", price: 10, category: "vintage", type: "components", brand: "ibm", image: "chips-rom.jpg" },
    { id: 18, name: "Capacitors, Resistors, and Connectors", price: 10, category: "vintage", type: "components", brand: "ibm", image: "capacitors.jpg" },
    { id: 19, name: "Intel Core i5-10400F (6 núcleos, 12 hilos)", price: 73.60, category: "refurbished", type: "processors", brand: "intel", image: "intel-core-i5.jpg" },
    { id: 20, name: "GTX 1660 Super", price: 128.80, category: "refurbished", type: "graphic-cards", brand: "nvidia", image: "gtx-1660-super.jpg" },
    { id: 21, name: "B450M for Ryzen", price: 46, category: "refurbished", type: "motherboards", brand: "amd", image: "b450m.jpg" },
    { id: 22, name: "DDR4 16GB (2x8GB) 3200MHz", price: 36.80, category: "refurbished", type: "ram", brand: "corsair", image: "ddr4-16gb.jpg" },
    { id: 23, name: "SSD NVMe 1TB Gen3", price: 46, category: "refurbished", type: "storage", brand: "samsung", image: "ssd-nvme.jpg" },
    { id: 24, name: "Corsair RM750 80+ Gold", price: 73.60, category: "refurbished", type: "accessories", brand: "corsair", image: "corsair-rm750.jpg" },
    { id: 25, name: "Intel Core i9 14900K", price: 0, category: "new", type: "processors", brand: "intel", image: "intel-core-i9.jpg" },
    { id: 26, name: "AMD Ryzen 7 7800X3D", price: 0, category: "new", type: "processors", brand: "amd", image: "amd-ryzen.jpg" },
    { id: 27, name: "Intel Core Ultra 5 245K", price: 0, category: "new", type: "processors", brand: "intel", image: "intel-core-ultra.jpg" },
    { id: 28, name: "Nvidia RTX 4080 Super", price: 0, category: "new", type: "graphic-cards", brand: "nvidia", image: "rtx-4080.jpg" },
    { id: 29, name: "Nvidia RTX 5090", price: 0, category: "new", type: "graphic-cards", brand: "nvidia", image: "rtx-5090.jpg" },
    { id: 30, name: "AMD Radeon RX 7800 XT", price: 0, category: "new", type: "graphic-cards", brand: "amd", image: "amd-raedon.jpg" },
    { id: 31, name: "Corsair Vengeance DDR5 RGB 2 x 16 GB", price: 0, category: "new", type: "ram", brand: "corsair", image: "corsair-vengeance.jpg" },
    { id: 32, name: "Kingston Fury DDR5 RGB 2 x 16 GB", price: 0, category: "new", type: "ram", brand: "kingston", image: "kingstom-fury.jpg" }
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
            <p>Price: €${product.price ? product.price : 'Contact us for pricing'}</p>
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
        cart.push(product);
        cartCount++;
        cartTotal += product.price || 0; // Sumar 0 si el precio no está definido
        updateCart();
    }
}

// Función para actualizar el carrito
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartCountElement = document.querySelector('.cart-count');

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.name}</span>
            <span>€${item.price ? item.price.toFixed(2) : 'Contact us for pricing'}</span>
        `;
        cartItems.appendChild(li);
    });

    cartTotalElement.textContent = `€${cartTotal.toFixed(2)}`;
    cartCountElement.textContent = cartCount;
}

// Renderizar productos dinámicamente
function renderProducts() {
    const catalogContainer = document.querySelector('.catalog-container');
    catalogContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: €${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        catalogContainer.appendChild(productCard);
    });
}

// Llamar a la función para renderizar productos al cargar la página
renderProducts();