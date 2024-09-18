document.addEventListener("DOMContentLoaded", function() {
    // Load the mobile icons component into the main document
    fetch('components/mobile-icons.html')
        .then(response => response.text())
        .then(data => {
            // Insert the mobile-icons content into a specific location in your document
            document.getElementById('mobile-icons-section').innerHTML = data;
        })
        .catch(error => console.error('Error loading mobile icons:', error));
});
