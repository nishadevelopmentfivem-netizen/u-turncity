// Tab Title Animation
const titles = ["U-TURN CITY ROLEPLAY","JOIN WITH US NOW!"];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

function animateTitle() {
    const currentTitle = titles[titleIndex];
    
    if (isDeleting) {
        document.title = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 200;
    } else {
        document.title = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 200; 
    }

    if (!isDeleting && charIndex === currentTitle.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typeSpeed = 500;
    }

    setTimeout(animateTitle, typeSpeed);
}
window.onload = function() {
    animateTitle();
};

window.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }, 2000);
});
