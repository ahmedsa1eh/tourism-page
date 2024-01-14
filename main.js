
function navToggle(){
    let navBar = document.querySelector("nav")
let menuBtn = document.querySelector(".menu-btn")
navBar.classList.toggle("nav-active")


navBar.classList.contains("nav-active")?menuBtn.classList.add("menu-btn-active") : menuBtn.classList.remove("menu-btn-active");

}
