(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const Article = () => {
	const container = $('<div class="container"></div>');
	const row = $('<div class="row"></div>');
	const articleContainer = $('<div class="col s8"></div>');
	const title = $('<h4 class="uppercase">Mit busca estudiantes de todo el mundo que quieran estudiar gratis</h4>');
	const subtitle = $('<p>Ya no será necesario ir hasta el campus de MIT para estudiar allá, por medio de su curso gratuito en línea cualquier podrá hacerlo.</p>');
	const imageContainer = $('<div class="col s12"></div>')
	const image = $('<img src="assets/img/foto-n1.png" class="article-img">');
	const authorContainer = $('<div class="col s12 author-info"></div>');
	const authorImage = $('<img src="assets/img/authors/dianaluque.png" class="author">');
	const authorName = $('<p class="uppercase col s12">Diana Luque Lavado <br> 22.06.17 12:26 pm <br> @photosynthetica</p>');
	const article = $(`<p>Nuestro ingeniero había expresado su <b>deseo de estudiar en Stanford</b> y encontró la manera de hacerlo gratis 
						gracias a los cursos virtuales de tecnología y emprendimiento. Ahora <b>el Massachusetts Institute of Technology 
						(MIT) anunció su primer curso totalmente en línea a partir de marzo</b>, según lo reporta BBC News.</p>
						<p>Este primer proyecto en línea, el cual es un curso de circuitos y electrónica, fue bautizado como MITx 
						diseñado como un prototipo que busca romper las barreras de la educación, por medio de un sistema automatizado 
						que al final del curso hará que los estudiantes más exitosos reciban un certificado.</p>
						<p>MIT ofrece desde hace un tiempo varios cursos en línea. La diferencia, además de ser gratuito, es abierto 
						para cualquier estudiante del mundo sin requisitos de ingreso. Todo será por medio de su plataforma, los 
						materiales de estudio, junto con un laboratorio virtual y libros digitales o e-books para consulta.</p>
						<p>El curso de circuitos y electrónica comenzará el próximo lunes, y está basado en el que el campus ofrece 
						presencial con el mismo nombre. MIT asegura que no es una versión ligera del mismo sino que tendrá todos los 
						componentes e incluye ejercicios interactivos para comprobar los conocimientos de los estudiantes.</p>
						<p>El profesor Anant Agarwal, director del laboratorio de computación e inteligencia artificial de MIT, aclara
						 que no existirán requisitos como titulaciones para tomar el curso, pero <b>aconseja tener conocimientos en 
						 matemáticas, ciencias e inglés para quienes este no es su idioma nativo, y asumir un código de honor en el 
						 que los estudiantes se comprometan a un comportamiento honesto</b>.</p><p>Este primer curso es la prueba para los 
						 siguientes que MIT desea abrir en áreas como biología, física y matemáticas, como una forma de formar y 
						 acreditar personas para generar empleo. La universidad busca también llamar la atención de los empleadores y 
						 posibles interesados en financiación a futuro.</p><p>Existirá diferenciación entre un titulo obtenido de 
						 manera presencial y uno virtual, así como el material de estudio pero la idea con MITx es llegar a un grupo 
						 de estudiantes internacional y también entrar en la competición de ofertas educativas, no solo la de Stanford, 
						 sino también con lo que iTunes U ofrece en cuanto a lecturas.</p><p>Se pueden inscribir en el sitio web de MITx, 
						 en el que encontrarán un enlace que ‘enlistar’ o ‘enroll’ para este curso. De seguro se volverán a encontrar 
						 con nuestro ingeniero en la sala de estudio virtual.</p>`);

	authorContainer.append(authorImage, authorName);
	imageContainer.append(image);
	articleContainer.append(authorContainer, article);
	row.append(title, subtitle, imageContainer, articleContainer);
	container.append(row);

	return container;
}
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
            link.on('click',() =>{state.informacion = data});
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
            const boxFive = $('<div class="col l3 s12 news-type-5"></div>');
            boxFive.append(newsContainer(data));
            return boxFive;
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
const Header = () => {
    const headerContainer = $(`<header class="header"></header>`);
    const nav = $(`<div class="row"></div>`);
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
function date(){
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const week = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const date = new Date();
  const today = week[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate() + ' de ' + date.getFullYear();
  return today;
}

'use strict';

const InformationNews = (data) => {
    const container = $('<div></div>');
    const row = $('<div class="row"></div>');

    const articleContainer = $('<div class="col s8"></div>');
    const title = $('<h4 class="uppercase">'+data.title+'</h4>');
    const subtitle = $('<p>'+data.brief+'</p>');
    const imageContainer = $('<div class="col s12"></div>')
    const image = $('<img src="assets/img/foto-n1.png" class="article-img">');
    const authorContainer = $('<div class="col s12 author-info"></div>');
    const authorImage = $('<img src="assets/img/authors/'+data.author.picture +'" class="author">');
    const authorName = $('<p class="uppercase col s12">' + data.author.name + '<br/>' +
        data['published-date'] + '<br>' + data.author.user + '</p>');
    const article = $(data.body);

    authorContainer.append(authorImage, authorName);
    imageContainer.append(image);
    articleContainer.append(authorContainer, article);
    row.append(title, subtitle, imageContainer, articleContainer);


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
        state.noti="nota1";
        update();
      }
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


    if(state.noti=="nota1"){
      wrapper.append(InformationNews(state.informacion));
    }
    wrapper.append(Footer());
    root.append(wrapper);
};

const state = {
    news: null,
    categories: null,
    noti:null,
    informacion: null
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