'use strict';


const MainNews = (update) => {
    const container = $('<div class="container-main"></div>');
    const row = $('<div class="row"></div>');

    state.news.forEach((i) => {
        if (state.categories[0].id == i.categories[0]) {
                row.append(switcher(i));
        }
    });

    row.first().on('click',(e) => {
      if(e.target.id == "news-0.png"){
        alert('entraste!');
        state.noti="nota1";
        update();
      }
      console.log(e.target.className);
    });

    container.append(row);

    return container;
};
