import slideMenu from "./menu.js";
slideMenu({
    openBtn: '.header__burger-btn',
    menu: '.navigation',
    classActive: 'navigation_active',
    closeTriggers: '.navigation__link, .navigation__close',
});