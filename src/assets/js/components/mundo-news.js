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