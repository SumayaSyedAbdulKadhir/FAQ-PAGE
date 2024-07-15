// Get all the category buttons
const categoryButtons = document.querySelectorAll('.category-btn');

// Get all the FAQ categories
const faqCategories = document.querySelectorAll('.faq-category');

// Add an event listener to each category button
categoryButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Get the category of the button that was clicked
    const category = e.target.getAttribute('data-category');

    // Hide all FAQ categories
    faqCategories.forEach((category) => {
      category.style.display = 'none';
    });

    // Show only the FAQ category that matches the clicked button
    const selectedCategory = document.querySelector(`.faq-category[data-category="${category}"]`);
    selectedCategory.style.display = 'block';
  });
});