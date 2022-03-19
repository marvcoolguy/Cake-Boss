const nav = document.querySelector(".navbar")
const openIcon = document.querySelector(".open-icon")
const closeIcon = document.querySelector(".close-icon")

openIcon.addEventListener("click", openNav)
function openNav() {
    nav.style.display = "block";
    closeIcon.style.display = "block";
    openIcon.style.display = "none";
} 

closeIcon.addEventListener("click", closeNav)
function closeNav() {
    nav.style.display = "none";
    closeIcon.style.display = "none";
    openIcon.style.display = "block";
} 