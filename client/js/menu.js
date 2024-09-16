// Function to initialize menu interactions
function initializeMenu() {
    // Select elements
    const cartIcon = document.querySelector('.cart-icon');
    const cartCount = document.querySelector('.cart-count');
    const modal = document.getElementById('customize-modal');
    const closeModalBtn = modal.querySelector('.close-btn');
    const bagItButtons = document.querySelectorAll('.bag-it-btn');
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const customizeForm = document.getElementById('customize-form');
    let itemCount = 0;
    let selectedItem = null;

    // Open the modal when "Bag-It" button is clicked
    bagItButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            selectedItem = event.target.closest('li');
            modal.style.display = 'flex';
        });
    });

    // Close the modal when the close button is clicked
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Handle adding the item to the cart
    addToCartBtn.addEventListener('click', () => {
        const quantity = parseInt(document.getElementById('quantity').value) || 1;
        const removeIngredients = Array.from(document.querySelectorAll('#remove-ingredients input:checked')).map(checkbox => checkbox.value);
        const addIngredients = Array.from(document.querySelectorAll('#add-ingredients input:checked')).map(checkbox => checkbox.value);
        const addServiettes = document.querySelector('input[name="serviettes"]:checked') ? true : false;

        // For demonstration, log the selected options
        console.log('Item:', selectedItem.querySelector('h4').textContent);
        console.log('Quantity:', quantity);
        console.log('Remove Ingredients:', removeIngredients);
        console.log('Add Ingredients:', addIngredients);
        console.log('Add Serviettes:', addServiettes);

        // Update cart count
        itemCount += quantity;
        cartCount.textContent = itemCount;

        // Close the modal
        modal.style.display = 'none';

        // Reset the form
        customizeForm.reset();
    });
}

// Wait for all components to load before initializing the menu
window.addEventListener('load', () => {
    initializeMenu();
});
