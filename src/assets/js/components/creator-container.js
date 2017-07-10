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