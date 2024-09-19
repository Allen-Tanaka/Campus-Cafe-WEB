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

// Function to load the header component
function loadHomeHeader(callback) {
    loadComponent('components/header.html', 'css/header.css', 'header', callback);
}

// Function to load the footer component
function loadFooter(callback) {
    loadComponent('components/footer.html', 'css/footer.css', 'footer', callback);
}

// Function to load the menu component
function loadMenuSection(callback) {
    loadComponent('components/menu.html', 'css/menu.css', '#menu-section', callback);
}