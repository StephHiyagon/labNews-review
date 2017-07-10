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