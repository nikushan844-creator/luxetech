const products = [
  { sku: "LT-PH-001", category: "Smartphones", brand: "Apple", name: "iPhone 15 Pro 128GB", description: "A17 Pro chip, titanium body, 48MP camera, USB-C", price: 3199, oldPrice: 3499, stock: 12 },
  { sku: "LT-PH-002", category: "Smartphones", brand: "Samsung", name: "Galaxy S24 Ultra 256GB", description: "Galaxy AI, 200MP camera, S Pen, AMOLED display", price: 3299, oldPrice: 3599, stock: 8 },
  { sku: "LT-LP-001", category: "Laptops", brand: "Apple", name: "MacBook Air 13 M3 256GB", description: "Lightweight laptop with M3 chip, 13-inch Liquid Retina display", price: 3499, oldPrice: 3799, stock: 6 },
  { sku: "LT-LP-002", category: "Laptops", brand: "Lenovo", name: "IdeaPad Slim 5 16GB/512GB", description: "Everyday performance laptop with Ryzen processor and fast SSD", price: 1899, oldPrice: 2099, stock: 14 },
  { sku: "LT-TB-001", category: "Tablets", brand: "Apple", name: "iPad Air 11 M2 128GB", description: "Portable tablet with M2 chip, Apple Pencil Pro support", price: 2199, oldPrice: 2399, stock: 10 },
  { sku: "LT-AU-001", category: "Audio", brand: "Sony", name: "WH-1000XM5 Headphones", description: "Wireless noise cancelling headphones with long battery life", price: 999, oldPrice: 1199, stock: 18 },
  { sku: "LT-AU-002", category: "Audio", brand: "JBL", name: "Charge 5 Speaker", description: "Portable waterproof Bluetooth speaker with powerbank function", price: 399, oldPrice: 459, stock: 24 },
  { sku: "LT-TV-001", category: "TV & Home", brand: "Samsung", name: "55-inch QLED 4K Smart TV", description: "Quantum Dot display, smart apps, HDR support", price: 1899, oldPrice: 2199, stock: 7 },
  { sku: "LT-GM-001", category: "Gaming", brand: "Sony", name: "PlayStation 5 Slim", description: "Next-generation console with DualSense controller", price: 1599, oldPrice: 1799, stock: 9 },
  { sku: "LT-AC-001", category: "Accessories", brand: "Anker", name: "65W USB-C Charger", description: "Compact fast charger for phones, tablets, and laptops", price: 129, oldPrice: 159, stock: 35 },
  { sku: "LT-AC-002", category: "Accessories", brand: "Logitech", name: "MX Master 3S Mouse", description: "Ergonomic wireless productivity mouse with quiet clicks", price: 299, oldPrice: 349, stock: 20 },
  { sku: "LT-WT-001", category: "Wearables", brand: "Apple", name: "Apple Watch Series 9 45mm", description: "Health tracking, always-on display, fast performance", price: 1299, oldPrice: 1499, stock: 11 }
];

const grid = document.querySelector("#productGrid");
const filters = document.querySelectorAll("[data-filter]");
const phone = "995591959898";

function renderProducts(category = "all") {
  const visible = category === "all" ? products : products.filter((product) => product.category === category);
  grid.innerHTML = visible.map((product) => {
    const message = encodeURIComponent(`გამარჯობა, მაინტერესებს ${product.name} (${product.sku}). ფასი: ${product.price} GEL`);
    return `
      <article class="product-card">
        <div class="product-visual"><span></span></div>
        <div class="product-meta"><span>${product.category}</span><span>${product.brand}</span></div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price-row">
          <span class="price">${product.price} GEL</span>
          <span class="old-price">${product.oldPrice} GEL</span>
        </div>
        <div class="product-meta"><span>SKU: ${product.sku}</span><span>მარაგი: ${product.stock}</span></div>
        <a class="order-link" href="https://wa.me/${phone}?text=${message}" target="_blank" rel="noopener">შეკვეთა</a>
      </article>
    `;
  }).join("");
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
});

renderProducts();
