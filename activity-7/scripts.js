// Part B: Product Data Structure
const products = [
    { id: 1, name: "Smart Watch", description: "Monitor your health.", price: 199.99, category: "electronics", image: "https://via.placeholder.com/250" },
    { id: 2, name: "Canvas Backpack", description: "Water resistant.", price: 45.00, category: "clothing", image: "https://via.placeholder.com/250" },
    { id: 3, name: "JavaScript 101", description: "Learn coding basics.", price: 29.99, category: "books", image: "https://via.placeholder.com/250" },
    { id: 4, name: "Wireless Earbuds", description: "Studio quality sound.", price: 120.00, category: "electronics", image: "https://via.placeholder.com/250" },
    { id: 5, name: "Denim Jacket", description: "Classic style.", price: 85.00, category: "clothing", image: "https://via.placeholder.com/250" }
];

// Part C: Product Display Functions
function createCardHTML(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>$${product.price.toFixed(2)}</strong></p>
            <button class="buy-btn">Add to Cart</button>
        </div>
    `;
}

function renderCatalog(filteredItems) {
    const grid = document.getElementById('product-grid');
    const countDisplay = document.getElementById('result-count');
    
    grid.innerHTML = ""; // Clear grid
    
    filteredItems.forEach(item => {
        grid.innerHTML += createCardHTML(item);
    });
    
    countDisplay.textContent = `Showing ${filteredItems.length} products`;
}

// Part D: Search and Filter Features
function applyFilters() {
    const searchVal = document.getElementById('search-input').value.toLowerCase();
    const categoryVal = document.getElementById('filter-select').value;

    const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchVal) || 
                              p.description.toLowerCase().includes(searchVal);
        const matchesCategory = categoryVal === "all" || p.category === categoryVal;
        return matchesSearch && matchesCategory;
    });

    renderCatalog(filtered);
}

// Clear Filters Logic
document.getElementById('clear-btn').addEventListener('click', () => {
    document.getElementById('search-input').value = "";
    document.getElementById('filter-select').value = "all";
    renderCatalog(products);
});

// Event Listeners for Input
document.getElementById('search-input').addEventListener('input', applyFilters);
document.getElementById('filter-select').addEventListener('change', applyFilters);

// Initial Render
renderCatalog(products);