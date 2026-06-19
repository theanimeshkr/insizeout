const categoryButtons = document.querySelectorAll('.category-btn');
const productCards = document.querySelectorAll('.product-card');
const searchField = document.getElementById('productSearch');

function filterProducts(category = 'all', query = '') {
  const normalizedQuery = query.trim().toLowerCase();

  productCards.forEach(card => {
    const matchesCategory = category === 'all' || card.dataset.category === category;
    const title = card.dataset.title.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();
    const matchesSearch =
      normalizedQuery === '' ||
      title.includes(normalizedQuery) ||
      description.includes(normalizedQuery);

    card.style.display = matchesCategory && matchesSearch ? 'grid' : 'none';
  });
}

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    filterProducts(button.dataset.category, searchField.value);
  });
});

searchField.addEventListener('input', () => {
  const activeCategory = document.querySelector('.category-btn.active').dataset.category;
  filterProducts(activeCategory, searchField.value);
});