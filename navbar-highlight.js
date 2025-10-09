// Navbar Highlight Function - Works in both local and production environments
function setActivePage() {
    // Get current page URL with multiple detection methods
    const pathname = window.location.pathname;
    const currentPage = pathname.split('/').pop();
    const fullPath = pathname.toLowerCase();

    // Remove active class from all links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to current page link
    let activeLink = null;

    // More robust page detection for both local and production environments
    if (fullPath.includes('gallery') || currentPage === 'gallery.html' || currentPage === 'gallery') {
        activeLink = document.getElementById('gallery-link');
    } else if (fullPath.includes('about') || currentPage === 'about.html' || currentPage === 'about') {
        activeLink = document.getElementById('about-link');
    } else if (fullPath.includes('service') || currentPage === 'service.html' || currentPage === 'service') {
        activeLink = document.getElementById('service-link');
    } else if (fullPath.includes('contact') || currentPage === 'contact.html' || currentPage === 'contact') {
        activeLink = document.getElementById('contact-link');
    } else if (fullPath.includes('index') || currentPage === 'index.html' || currentPage === 'index' || currentPage === '' || pathname === '/' || pathname.endsWith('/')) {
        activeLink = document.getElementById('home-link');
    }

    // Fallback: check by href attribute matching
    if (!activeLink) {
        document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href && (pathname.includes(href.replace('.html', '')) || (href === 'index.html' && (pathname === '/' || pathname.endsWith('/'))))) {
                activeLink = link;
            }
        });
    }

    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Debug logging for troubleshooting (remove in production)
    console.log('Navbar Highlight Debug:');
    console.log('Current pathname:', pathname);
    console.log('Current page:', currentPage);
    console.log('Active link:', activeLink ? activeLink.textContent : 'none');
    console.log('Full path (lowercase):', fullPath);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setActivePage();
});

// Also run on page load (for compatibility)
window.addEventListener('load', function() {
    setActivePage();
});
