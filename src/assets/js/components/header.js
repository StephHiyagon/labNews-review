'use strict';

// const Header = () => {
//     const nav = $('<nav class="nav"></nav>');
//     const iconMenu = $('<img class="icon-menu" src="assets/img/menu.png"/>');
//
//     nav.append(iconMenu);
//     return nav;
// };

const Header = () => {
    const headerContainer = $(`<header class="header"></header>`);
    const nav = $(`<div></div>`);
    const divMenu = $(`<div class="header__menuDesk hide-on-small-only">
                            <ul class="col s10">
                                <li><img src="assets/img/menu.png" alt="">SECTIONS</li>
                                <li><img src="assets/img/search.png" alt="">SEARCH</li>
                              </ul>
                              <ul class="col s2">
                                <li><img src="assets/img/fb.png" alt=""></li>
                                <li><img src="assets/img/tw.png" alt=""></li>
                                <li><img src="assets/img/in.png" alt=""></li>
                              </ul>
                       </div><hr class="hide-on-small-only">`);

    const logoHeader = $(`<div class="header__logo hide-on-small-only">
                            <img src="assets/img/logoicon.png" alt="">
                            <span>hora | <img src="assets/img/cloud.png" alt=""> 20°</span>
                          </div>`);

    nav.append(divMenu);
    nav.append(logoHeader);

    const menuMob= $(`<div class="header__menu-mobile hide-on-med-and-up">
                        <div class="logo col s7"><img src="assets/img/logoicon.png" alt=""></div>
                        <div class="search col s1"><img src="assets/img/menu.png" alt=""></div>
                      </div>`);
    headerContainer.append(nav);
    headerContainer.append(menuMob);
    return headerContainer;
}
