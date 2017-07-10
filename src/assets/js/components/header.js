'use strict';

const Header = () => {
    const nav = $('<nav class="nav"></nav>');
    const iconMenu = $('<img class="icon-menu" src="assets/img/menu.png"/>');

    nav.append(iconMenu);
    return nav;
};