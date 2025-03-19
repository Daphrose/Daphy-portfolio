document.addEventListener("DOMContentLoaded", function () {
    let menuIcon = document.getElementById("menu-icon");
    let navbar = document.getElementById("navigation");

    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("active");
        
        if (navbar.classList.contains("active")) {
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-x");
        } else {
            menuIcon.classList.remove("fa-x");
            menuIcon.classList.add("fa-bars");
        }
    });
});
