import { getTrends } from "./services.js";
import renderOthers from "./renderOthers.js";
const firstRender = (film) => {
    const filmWeek = document.querySelector('.film-week');
    filmWeek.innerHTML = `
    <div class="container film-week__container" data-rating="${film.vote_average}">
        <div class="film-week__poster-wrapper">
            <img class="film-week__poster" src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${film.backdrop_path}" 
            alt="постер ${film.name || film.title}">
            <p class="film-week__title_origin">${film.original_name || film.original_title}</p>
         </div>
        <h2 class="film-week__title">${film.name || film.title}</h2>
        <a class="film-week__watch-trailer tube" href="https://youtu.be/V0hagz_8L3M" aria-label="смотреть трейлер"></a>
    </div> ` 
}

const renderFilm = async () => {
    const data = await getTrends();
    const [firstFilm, ...otherFilms] = data.results;
    otherFilms.length = 16;
    firstRender(firstFilm);
    renderOthers(otherFilms);
}
export default renderFilm;