document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav')) {
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    });
});


function copyEmailToClipboard(btn) {
    const email = "willson.jack012@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const textSpan = document.getElementById("email-btn-text");
        const icon = btn.querySelector("i");
        
        // Temporarily swap text and icon
        textSpan.textContent = "Email Copied!";
        icon.className = "fa-solid fa-check";
        
        // Reset back to original state after 2 seconds
        setTimeout(() => {
            textSpan.textContent = "Contact Me";
            icon.className = "fa-solid fa-envelope";
        }, 2000);
    }).catch(err => {
        // Fallback for older browsers
        window.location.href = "mailto:willson.jack012@gmail.com";
    });
}