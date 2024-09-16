// Helper function to dynamically load CSS files
function loadCSS(filePath) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = filePath;
    document.head.appendChild(link);
}

// Function to load the home header
function loadHomeHeader(callback) {
    fetch('components/home-header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
            loadCSS('css/home-header.css'); // Load the home header CSS
            if (callback) callback();
        })
        .catch(error => console.error('Error loading home header:', error));
}

// Function to load the footer
function loadFooter(callback) {
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
            loadCSS('css/footer.css'); // Load the footer CSS
            if (callback) callback();
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Function to load the menu section
function loadMenuSection(callback) {
    fetch('components/menu.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('#menu-section').innerHTML = data;
            loadCSS('css/menu.css'); // Load the menu CSS
            if (callback) callback();
        })
        .catch(error => console.error('Error loading menu section:', error));
}