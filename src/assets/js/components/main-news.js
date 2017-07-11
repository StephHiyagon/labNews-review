'use strict';


const MainNews = (update) => {
    const container = $('<div class="container-main"></div>');
    const row = $('<div class="row"></div>');
    const h4 = $(`<div class="categoria col s12 hide-on-med-and-up"><h4>LO ÚLTIMO</h4><hr/></div>`);
    row.append(h4);

    state.news.forEach((i) => {
        if (state.categories[0].id == i.categories[0]) {
                row.append(switcher(i));
        }
    });

    row.first().on('click',(e) => {
      if(e.target.id == "news-0.png"){
        state.noti="nota1";
        update();
      }
    });

    container.append(row);

    return container;
};
