'use strict';
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
                            <span>${date()} | <img src="assets/img/cloud.png" alt=""> 20°</span>
                          </div>`);

    nav.append(divMenu);
    nav.append(logoHeader);

    const menuMob= $(`<div class="header__menu-mobile hide-on-med-and-up">
                        <div class="logo col s7"><img src="assets/img/logoicon.png" alt=""></div>
                        <div class="search col s1"><img src="assets/img/menu.png" alt=""></div>
                      </div>`);

    const divNavigation = $(`<div class="header__navigation col s12 hide-on-small-only">
                           <ul>
                               <li>Lo último</li>
                               <li>Opinión</li>
                               <li>Cultura</li>
                               <li>Perú</li>
                               <li>Tecnología</li>
                               <li>Mundo</li>
                               <li>Economía</li>
                               <li>LifeStyle</li>
                               <li>Deporte</li>
                             </ul>
                      </div>`);
  nav.append(divNavigation);
  headerContainer.append(nav);
  headerContainer.append(menuMob);
  return headerContainer;
}
function date(){
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const week = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const date = new Date();
  const today = week[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate() + ' de ' + date.getFullYear();
  return today;
}
