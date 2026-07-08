const productGrid = document.getElementById("productGrid");
const categoryButtons = document.querySelectorAll(".category-btn");
const searchField = document.getElementById("productSearch");

let products = [];
let activeCategory = "all";

// Load products from backend
async function loadProducts() {
  try {
    const response = await fetch("https://insizeout-1.onrender.com/api/products");
    products = await response.json();

    renderProducts(products);
  } catch (error) {
    console.error("Failed to load products:", error);

    productGrid.innerHTML =
      "<h3>Unable to load products.</h3>";
  }
}

// Display products
function renderProducts(productList) {
  productGrid.innerHTML = "";

  productList.forEach((product) => {
    productGrid.innerHTML += `
      <article class="product-card">

        <img src="${product.image}" alt="${product.name}">

        <div class="product-content">

          <span class="product-category">
            ${product.category}
          </span>

          <h3>${product.name}</h3>

          <p>${product.description}</p>

          <div class="product-meta">
            <span class="price">₹${product.price}</span>
            <span class="package">${product.package}</span>
          </div>

        </div>

        <div class="order-buttons">

          <a
            class="button btn-order"
            target="_blank"
            href="https://wa.me/7645899057?text=Hello InSizeOut, I would like to order ${encodeURIComponent(product.name)}">

            Order via WhatsApp

          </a>

        </div>

      </article>
    `;
  });
}

// Filter
function filterProducts() {
  const query = searchField.value.toLowerCase();

  const filtered = products.filter((product) => {
    const matchCategory =
      activeCategory === "all" ||
      product.category === activeCategory;

    const matchSearch =
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);

    return matchCategory && matchSearch;
  });

  renderProducts(filtered);
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {

    categoryButtons.forEach((btn) =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    activeCategory = button.dataset.category;

    filterProducts();
  });
});

searchField.addEventListener("input", filterProducts);

loadProducts();