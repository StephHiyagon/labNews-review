'use strict';

const EducationNews = () => {
        const container = $('<div class="container-tecnology"></div>');
        const row = $('<div class="row"></div>');
        const h4 = $(`<div class="categoria col s12"><h4>${state.categories[3].title}</h4><hr/></div>`);
        row.append(h4);

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
