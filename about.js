let hamelem = document.getElementById("ham");
hamelem.addEventListener("click", toggleMenu);

function toggleMenu() {
    let mobileMenuElem = document.getElementById ("mobmenu");
    mobileMenuElem.classList.toggle("show-menu");
}