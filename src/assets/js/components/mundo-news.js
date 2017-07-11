'use strict';

const MundoNews = (update) => {
    const container = $('<div class="container-mundo"></div>');
    const row = $('<div class="row"></div>');
    const group = $('<div class="col l6 s12"></div>');

    state.news.forEach((i, index) => {
        if (state.categories[1].id == i.categories[0]) {
            if (index == 5 || index == 6 || index == 8 || index == 9) {
                group.append(switcher(i));
            } else if (index == 4) {
                row.prepend(switcher(i));
            }else {
                row.append(switcher(i));
            }
        }
    });

    row.prepend(group);
    container.append(row);
    return container;
};