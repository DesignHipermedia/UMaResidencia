let toggleNavStatus = false;

let toggleNav = function () {
    let Menu = document.querySelector(".menu-nav");
    let MenuUl = document.querySelector(".menu-nav ul");
    let MenuAtual = document.querySelector(".menu-nav span");
    let MenuLinks = document.querySelectorAll(".menu-nav a");
    let MenuIcon = document.querySelector(".btn-menu");
    let Logo = document.querySelector(".logo");
    let SubLogo = document.querySelector("h2");
    let Body = document.querySelector("body");
    let Exit = document.querySelector(".exit");

    if (toggleNavStatus === false) {
        Menu.style.height = "100vh";
        MenuUl.style.visibility = "visible";
        MenuAtual.style.opacity = "0.5";
        MenuIcon.style.visibility = "hidden";
        Logo.src = "img/logo2.png";
        Body.style.overflow = "hidden";
        Exit.style.opacity = 1;
        SubLogo.style.color = "white";
        

        let arrayLenght = MenuLinks.length;
        for (let i = 0; i < arrayLenght; i++) {
            MenuLinks[i].style.opacity = "1";
        }
        toggleNavStatus = true;

    }
    else {
        Menu.style.height = "0";
        MenuUl.style.visibility = "hidden";
        MenuAtual.style.opacity = "0";
        MenuIcon.style.visibility = "visible";
        Logo.src = "img/logo.png";
        Body.style.overflow = "visible";
        Exit.style.opacity = "0";
        SubLogo.style.color = "black";

        let arrayLenght = MenuLinks.length;
        for (let i = 0; i < arrayLenght; i++) {
            MenuLinks[i].style.opacity = "0";
        }
        toggleNavStatus = false;
    }
}