import {
    getPopular,
    getTop,
    getTrends
} from './services.js'
import renderOthers from './renderOthers.js';


const menuLinks = () => {
    const getNav = document.querySelectorAll('.get-nav');
    const title = document.querySelector('.other-films__title');
    const filmWeek = document.querySelector('.film-week');
    
    getNav.forEach(item => {
        item.addEventListener('click', event => {
            const target = event.target.closest('.get-nav__link');
            if(target) {
                filmWeek.style.display = 'none';
                title.textContent = target.textContent;

                if(target.classList.contains('get-nav__link_popular-movies')) {
                    getPopular('movie').then(data => renderOthers(data.results));
                }

                if(target.classList.contains('get-nav__link_popular-tv')) {
                    getPopular('tv').then(data => renderOthers(data.results));
                }

                if(target.classList.contains('get-nav__link_top-movies')) {
                    getTop('movie').then(data => renderOthers(data.results));
                }

                if(target.classList.contains('get-nav__link_top-tv')) {
                    getTop('tv').then(data => renderOthers(data.results));
                }

                if(target.classList.contains('get-nav__link_triends')) {
                    getTrends('all', 'week').then(data => renderOthers(data.results));
                }
     
            }
        })
    })
};

export default menuLinks;