
const renderOthers = otherFilms => {
    const otherFilmsListE = document.querySelector('.other-films__list');
    otherFilmsListE.textContent = '';
    otherFilms.forEach(otherFilm => {
        const otherFilmsItemE = document.createElement('li');
        otherFilmsItemE.innerHTML = `
        <a class="other-films__link" data-rating="${otherFilm.vote_average == 0 ? '?' : otherFilm.vote_average}">
            <img class="other-films__img" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${otherFilm.poster_path}" 
            alt="постер ${otherFilm.name || otherFilm.title}">
        </a>`;
       otherFilmsListE.append(otherFilmsItemE);
    });
};

export default renderOthers;