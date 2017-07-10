'use strict';

const EducationNews = () => {
        const container = $('<div class="container-tecnology"></div>');
        const row = $('<div class="row"></div>');
        const h4 = $(`<h4 class="">${state.categories[3].title}</h4>`);
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
