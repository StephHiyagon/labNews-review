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