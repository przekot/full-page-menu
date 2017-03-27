/**
 * Created by michalbrzescinski on 27.03.2017.
 */

document.addEventListener('DOMContentLoaded', function () {

    var menuToggle = document.querySelector(".menu-button");
    var menuToggleSecond = document.querySelector(".close");
    var mainMenu = document.querySelector(".main-menu");

    menuToggle.addEventListener('click', function () {
        mainMenu.classList.toggle("hidden");
    });

    menuToggleSecond.addEventListener('click', function () {
        mainMenu.classList.toggle("hidden");
    });

});