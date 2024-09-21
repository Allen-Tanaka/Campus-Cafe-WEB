// Function to load a component and its associated CSS file
function loadComponent(componentUrl, cssUrl, containerSelector, callback) {
    // Load the HTML component
    fetch(componentUrl)
        .then(response => response.text())
        .then(html => {
            const container = document.querySelector(containerSelector);
            container.outerHTML = html;

            // Ensure that all images in the component are dynamically loaded
            const images = container.querySelectorAll('img');
            images.forEach(img => {
                const originalSrc = img.getAttribute('src');
                if (originalSrc && originalSrc.startsWith('../src/img/')) {
                    const imageName = originalSrc.split('/').pop(); // Get the image file name
                    img.setAttribute('src', `src/img/${imageName}`); // Dynamically set the image path
                }
            });

            // Load the CSS for the component if provided
            if (cssUrl) {
                const linkElement = document.createElement('link');
                linkElement.rel = 'stylesheet';
                linkElement.href = cssUrl;
                document.head.appendChild(linkElement);
            }

            // Call the callback function after loading the component
            if (callback) {
                callback();
            }
        })
        .catch(error => {
            console.error('Error loading component:', componentUrl, error);
        });
}

// Function to load the header component
function loadHomeHeader(callback) {
    loadComponent('components/header.html', 'css/header.css', 'header', callback);
}

// Function to load the menu component
function loadMenuSection(callback) {
    loadComponent('components/menu.html', 'css/menu.css', '#menu-section', callback);
}

// Function to load the footer component
function loadFooter(callback) {
    loadComponent('components/footer.html', 'css/footer.css', 'footer', callback);
}

// Function to load the banner component
function loadBannerSection(callback) {
    loadComponent('components/banner.html', 'css/banner.css', '#banner-section', callback);
}

// Initialization: Load components on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    loadHomeHeader(function() {
        loadFooter(function() {
            loadMenuSection(function() {
                loadBannerSection(function() {
                    // All components (header, footer, menu, banner) loaded
                });
            });
        });
    });
});
