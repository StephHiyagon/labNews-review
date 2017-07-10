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
    const img = $('<img class="responsive-img" src="assets/img/news/' + data.img + '" />');


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

};
'use strict';

const Header = () => {
    const nav = $('<nav class="nav"></nav>');
    const iconMenu = $('<img class="icon-menu" src="assets/img/menu.png"/>');

    nav.append(iconMenu);
    return nav;
};
'use strict';

const InformationNews = () =>{
  const container = $('<div></div>');
  const row = $('<div class="row"></div>');



  container.append(row);
  return container;
};

'use strict';


const MainNews = () => {
    const container = $('<div class="container-main"></div>');
    const row = $('<div class="row"></div>');

    state.news.forEach((i) => {
        if (state.categories[0].id == i.categories[0]) {
                row.append(switcher(i));
        }
    });

    row.first().on('click',() => {
        alert('listo');
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
    wrapper.append(MainNews());
    wrapper.append(MundoNews(_ =>{render(root)}));
    wrapper.append(TecnologyNews());
    wrapper.append(EducationNews());
    wrapper.append(OpinionNews());
    wrapper.append(CarruselNews());
    wrapper.append(Footer());

    root.append(wrapper);
};

const state = {
    news: null,
    categories: null
};

$(_ => {
    $.getJSON('/api/news/', (data) => {
        state.news = data;

        $.getJSON('/api/categories/', (res) => {
            state.categories = res;

            const root = $('.root');
            render(root);
        });
    });

});
},{}]},{},[1])