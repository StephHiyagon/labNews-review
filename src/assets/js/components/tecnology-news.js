'use strict';

const TecnologyNews = () => {
    const container = $('<div class="container__technology"></div>');
    const row = $('<div class="row"></div>');
    const h4 = $(`<h4 class="">${state.categories[2].title}</h4>`);
    row.append(h4);

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
