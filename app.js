const menuLinks = document.querySelectorAll('.esseaqui a[href^="#"]');

function scrollToSection(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute("href");
    const selection = document.querySelector(id);
    console.log(id);
}


menuLinks.forEach((link) =>{
    link.addEventListener("click", () => scrollToSection);
});

function scrollToSection(event) {
    event.preventDefault();
}

console.log(menuLinks);