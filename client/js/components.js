// Function to load the home header
function loadHomeHeader() {
    fetch('components/home-header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
            loadCSS('css/home-header.css'); // Load the home header CSS
        });
}

// Function to load the shared header
function loadHeader() {
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
            loadCSS('css/header.css'); // Load the shared header CSS
        });
}

// Function to load the footer
function loadFooter() {
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
            loadCSS('css/footer.css'); // Load the footer CSS
        });
}

// Helper function to dynamically load CSS files
function loadCSS(filePath) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = filePath;
    document.head.appendChild(link);
}

// Example: Load the header and footer on every page
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
});

