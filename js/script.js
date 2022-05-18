var navbar = document.querySelector("#navbar");
var message = document.querySelector(".message");
var scrll = document.querySelector(".scrll");
var menu = document.querySelector(".menu");
var side_top = document.querySelector(".top");
var side_middle = document.querySelector(".middle");
var side_bottom = document.querySelector(".bottom");
var side_menu = document.querySelector(".side_menu");
var sidemenu = document.querySelector(".sidemenu");
var clr90 = document.querySelector(".clr90");
var clr78 = document.querySelector(".clr78");
var clrfa = document.querySelector(".clrfa");
var clrff = document.querySelector(".clrff");
var clr10 = document.querySelector(".clr10");
var banner = document.querySelector("#banner");
// ========= cirle background start ==============//
clr90.addEventListener("click", function () {
    banner.classList.toggle("clrchange90");
})
clr78.addEventListener("click", function () {
    banner.classList.toggle("clrchange78");
})
clrfa.addEventListener("click", function () {
    banner.classList.toggle("clrchangefa");
})
clrff.addEventListener("click", function () {
    banner.classList.toggle("clrchangeff");
})
clr10.addEventListener("click", function () {
    banner.classList.toggle("clrchange10");
})
// ========= cirle background end ==============//
// ========= side menu show start ==============//
side_menu.addEventListener("click", function () {
    sidemenu.classList.toggle("sidemenushow");
    menu.classList.toggle("hidemenu");
})
// ========= side menu show end ==============//
// ========= side menu start ==============//
side_menu.addEventListener("click", function () {
    side_top.classList.toggle("tops");
    side_middle.classList.toggle("middles");
    side_bottom.classList.toggle("bottoms");
})
// ========= side menu end ================//
// ========= navbar stiky start ===============//
window.addEventListener("scroll", function () {
    navscrll = window.scrollY;
    if (navscrll > 200) {
        navbar.classList.add("stiky");
        side_menu.classList.add("stiky");
    } else {
        navbar.classList.remove("stiky");
        side_menu.classList.remove("stiky");
    }
})

// ========= navbar stiky end ===============//


// ========= messagebox start ===============//

window.addEventListener("scroll", function () {
    mebox = window.scrollY;
    if (mebox > 300) {
        message.classList.add("messagebox");

    } else {
        message.classList.remove("messagebox");
    }
})

// ========= messagebox end ===============//

// ========= messagebox start ===============//

window.addEventListener("scroll", function () {
    scrllup = window.scrollY;
    if (scrllup > 300) {
        scrll.classList.add("up");

    } else {
        scrll.classList.remove("up");
    }
})


// ========= messagebox end ===============//