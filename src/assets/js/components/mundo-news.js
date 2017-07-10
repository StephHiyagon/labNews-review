'use strict';

const MundoNews = (update) => {
    const container = $('<div class="container__mundo"></div>');
    const row = $('<div class="row"></div>');
    const col6 = $('<div class="col m6"></div>');
    const h4 = $(`<h4 class="">${state.categories[1].title}</h4>`);
    row.append(h4);

    state.news.forEach((elem) => {
        if (state.categories[1].id == elem.categories[0]) {
          row.append(switcher(elem));
        }
    });
    container.append(row);

    return container;
};
