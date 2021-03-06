import slideMenu from "./menu.js";
import renderFilm from './renderFilm.js';
import menuLinks from './menuLinks.js';
slideMenu({
    openBtn: '.header__burger-btn',
    menu: '.navigation',
    classActive: 'navigation_active',
    closeTriggers: '.navigation__link, .navigation__close',
});

renderFilm();  

menuLinks();