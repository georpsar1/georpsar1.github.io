
document.addEventListener('DOMContentLoaded', function () {
    const currentUrl = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        console.log(link)
        if (link.href.includes(currentUrl)) {
            link.parentElement.classList.add('bg-gray-200');
        }
    });

});