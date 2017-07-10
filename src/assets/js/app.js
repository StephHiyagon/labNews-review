'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(Header());
    wrapper.append(MainNews());
    wrapper.append(MundoNews(_ =>{render(root)}));
    wrapper.append(TecnologyNews());
    wrapper.append(EducationNews());
    wrapper.append(OpinionNews());
    wrapper.append(CarruselNews());
    wrapper.append(Footer());

    root.append(wrapper);
};

const state = {
    news: null,
    categories: null,
    noticia:null
};

$(_ => {
    $.getJSON('/api/news/', (data) => {
        state.news = data;
        console.log(state.news);

        $.getJSON('/api/categories/', (res) => {
            state.categories = res;
            console.log(state.categories);


            const root = $('.root');
            render(root);
        });
    });
  
});
