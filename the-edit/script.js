"use strict";

const menu = document.querySelector(".menu");
const btnCloseMenu = document.querySelector(".menu-close");
const btnsOpenMenu = document.querySelectorAll(".fa-bars");

const openMenu = function () {
  menu.classList.remove("hidden");
};

const closeMenu = function () {
  menu.classList.add("hidden");
};

for (let i = 0; i < btnsOpenMenu.length; i++) {
  btnsOpenMenu[i].addEventListener("click", openMenu);
}

btnCloseMenu.addEventListener("click", closeMenu);
