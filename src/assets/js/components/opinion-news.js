'use strict';

const OpinionNews = () => {
    const container = $('<div class="container__opinion"></div>');
    const row = $('<div class="row"></div>');
    const h4 = $(`<div class="categoria col s12"><h4>${state.categories[4].title}</h4><hr/></div>`);
    row.append(h4);

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
