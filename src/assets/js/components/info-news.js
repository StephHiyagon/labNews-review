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
