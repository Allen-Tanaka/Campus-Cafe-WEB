// Function to load a component and its associated CSS file
function loadComponent(componentUrl, cssUrl, containerSelector, callback) {
    // Load the HTML component
    fetch(componentUrl)
        .then(response => response.text())
        .then(html => {
            document.querySelector(containerSelector).outerHTML = html;

            // Load the CSS for the component
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

// Function to initialize the carousel slider
function initializeCarousel() {
    const bannerSlider = document.querySelector('#banner-slider');
    if (bannerSlider) {
        // Initialize Bootstrap's carousel with the interval and proper settings
        const carousel = new bootstrap.Carousel(bannerSlider, {
            interval: 3000, // Time between slides in milliseconds
            pause: 'hover', // Pause when hovering over the carousel
            wrap: true // Enable wrapping (slide back to first when at last slide)
        });

        console.log("Carousel initialized");
    } else {
        console.error("Carousel element not found.");
    }
}

// Function to load the banner component
function loadBannerSection(callback) {
    loadComponent('components/banner.html', 'css/banner.css', '#banner-section', function() {
        initializeCarousel(); // Initialize the carousel after the banner is loaded
        if (callback) {
            callback();
        }
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

// Initialization: Load components on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    loadHomeHeader(function() {
        loadFooter(function() {
            loadMenuSection(function() {
                loadBannerSection(function() {
                    // All components loaded, carousel initialized
                });
            });
        });
    });
});
