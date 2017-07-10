(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const CarruselNews = () => {
    const container = $('<div class="container-tecnology"></div>');
    const row = $('<div class="row"></div>');

    state.news.forEach((i) => {
        if (state.categories[5].id == i.categories[1]) {
            row.append(switcher(i));
        }
    });

    container.append(row);

    return container;
};
'use strict';

const newsContainer = (data) => {
    const container = $('<div class="container-news"></div>');
    const containerText = $('<div></div>');
    const title = $('<h5>' + data.title + '</h5>');
    const img = $('<img id="'+data.img+'" class="responsive-img" src="assets/img/news/' + data.img + '" />');


    containerText.append(title);

    if (data.type == 1) {
        title.addClass('main-title');
        const text = $('<p class="text">' + data.brief + '</p>');
        containerText.append(text);
    }
    if (data.isVideo == true) {
        const icon = $('<img class="container__video" src="assets/img/play-button.png"/>');
        container.append(icon);
    }

    container.append(img);
    container.append(containerText);

    return container;
};

const switcher = (data) => {
    switch (data.type) {
        case '1':
            const boxOne = $('<div class="col l12 s12 news-type-1"></div>');
            const link = $('<a class="info-new" href="#"></a>');
            boxOne.append(newsContainer(data));
            link.append(boxOne);
            InformationNews(link);
            return link;
            break;
        case '2':
            const boxTwo = $('<div class="col l6 s12 news-type-2"></div>');
            boxTwo.append(newsContainer(data));
            return boxTwo;
            break;
        case '3':
            const boxThree = $('<div class="col l3 s12 news-type-3"></div>');
            boxThree.append(newsContainer(data));
            return boxThree;
            break;
        case '4':
            const boxFour = $('<div class="col l3 s12 news-type-4"></div>');
            boxFour.append(newsContainer(data));
            return boxFour;
            break;
        case '5':
            const boxFive = $('<div class="col l6 s12 news-type-5"></div>');
            boxFive.append(newsContainer(data));
            return boxFive;
            break;
        case '6':
            const boxSix = $('<div class="col l3 s6 news-type-6"></div>');
            boxSix.append(newsContainer(data));
            return boxSix;
            break;
    }
};

'use strict';

const EducationNews = () => {
        const container = $('<div class="container-tecnology"></div>');
        const row = $('<div class="row"></div>');

            let counter = 0;
        state.news.forEach((i) => {
            if (state.categories[3].id == i.categories[0]) {
                counter += 1;
                if (counter <= 6) {
                    row.append(switcher(i));
                }
            }
        });

        container.append(row);

        return container;
};
'use strict';

const Footer = () => {
    const footerContainer = $('<footer class="footer"></footer>');

    const part1 = $(`<div class="footer__content col-sm-4">
                            <img src="assets/img/logo-footer.png" alt="">
                            <p>© Editado por Laboratoria
                                Av. José Pardo #601 Lima 1 Perú
                                Copyright © Laboratoria.la
                                Todos los derechos reservados.</p>
                       </div>`);
    footerContainer.append(part1);

    const part2 = $(`<div class="footer__content col-sm-4 hidden-xs">
                        <ul>
                          <li>
                            <p>DIRECTOR GENERAL:</p>
                            <p>Francisco Miró Quesada Cantuarias </p>
                          </li>
                          <li>
                            <p>DIRECTOR PERIODÍSTICO:</p>
                            <p>Fernando Berckemeyer Olaechea </p>
                          </li>
                          <li>
                            <p>SUSCRIPCIONES:</p>
                            <p>suscriptores@comercio.com.pe </p>
                          </li>
                          <li>
                            <p>PUBLICIDAD ONLINE:</p>
                            <p>fonoavisos@comercio.com.pe </p>
                          </li>
                          <li>
                            <p>CLUB EL COMERCIO:</p>
                            <p>clubelcomercio@comercio.com.pe
                            Compromiso de Autorregulación Comercial</p>
                          </li>
                        </ul>
                       </div>`);
    footerContainer.append(part2);

    const part3 = $(`<div class="footer__content col-sm-4 hidden-xs">
                            <p>TÉRMINOS Y CONDICIONES DE USO
                                TRABAJA CON NOSOTROS
                                LIBRO DE RECLAMACIONES
                                SEDES PRINCIPALES
                                POLÍTICAS DE PRIVACIDAD</p>
                            <span>Siguenos:
                                <a><img src="assets/img/fb.png" alt=""></a>
                                <a><img src="assets/img/tw.png" alt=""></a>
                                <a><img src="assets/img/in.png" alt=""></a>
                            </span>
                       </div>`);
    footerContainer.append(part3);
    return footerContainer;

}

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
   headerContainer.append(divNavigation);

    return headerContainer;
}

'use strict';

const InformationNews = () =>{
  const container = $('<div></div>');
  const row = $('<div class="row"></div>');



  container.append(row);
  return container;
};

'use strict';


const MainNews = (update) => {
    const container = $('<div class="container-main"></div>');
    const row = $('<div class="row"></div>');

    state.news.forEach((i) => {
        if (state.categories[0].id == i.categories[0]) {
                row.append(switcher(i));
        }
    });

    row.first().on('click',(e) => {
      if(e.target.id == "news-0.png"){
        alert('entraste!');
        state.noti="nota1";
        update();
      }
      console.log(e.target.className);
    });

    container.append(row);

    return container;
};

'use strict';

const MundoNews = (update) => {
    const container = $('<div class="container-mundo"></div>');
    const row = $('<div class="row"></div>');

    state.news.forEach((i) => {
        if (state.categories[1].id == i.categories[0]) {
            row.append(switcher(i));
        }
    });


    container.append(row);

    return container;
};
'use strict';

const OpinionNews = () => {
    const container = $('<div class="container-tecnology"></div>');
    const row = $('<div class="row"></div>');

    let counter = 0;
    state.news.forEach((i) => {
        if (state.categories[4].id == i.categories[0]) {
            counter += 1;
            if (counter <= 4) {
                row.append(switcher(i));
            }
        }
    });

    container.append(row);

    return container;
};
'use strict';

const TecnologyNews = () => {
    const container = $('<div class="container-tecnology"></div>');
    const row = $('<div class="row"></div>');

    let counter = 0;
    state.news.forEach((i) => {
        if (state.categories[2].id == i.categories[0]) {
            counter += 1;
            if (counter <= 5) {
                row.append(switcher(i));
            }
        }
    });

    container.append(row);

    return container;
};
'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
      wrapper.append(Header());
    if(!state.noti){
      wrapper.append(MainNews(_ =>{render(root)}));
      wrapper.append(MundoNews(_ =>{render(root)}));
      wrapper.append(TecnologyNews());
      wrapper.append(EducationNews());
      wrapper.append(OpinionNews());
      wrapper.append(CarruselNews());
    }

    console.log(state.noti);

    if(state.noti=="nota1"){
      wrapper.append(TecnologyNews());
    }
    wrapper.append(Footer());
    root.append(wrapper);
};

const state = {
    news: null,
    categories: null,
    noti:null
};

$(_ => {
    $.getJSON('/api/news/', (data) => {
        state.news = data;
        console.log(state.news);

        $.getJSON('/api/categories/', (res) => {
            state.categories = res;
            console.log(state.categories);


            const root = $('.root');
            render(root);
        });
    });

});

},{}]},{},[1])