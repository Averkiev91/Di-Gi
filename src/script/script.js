import '../index.html'
import '../style/style.css' // Импортируем стили css
// import Swiper JS
import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.top-slider', {
        modules: [Navigation, Pagination],
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.top-slider__button-next',
            prevEl: '.top-slider__button-prev',
        }
    })

    const achieve = new Swiper('.achieve__slider', {
        modules: [Pagination, Autoplay],
        pagination: {
            el: ".swiper-pagination",
            type: 'bullets',
            clickable: true
        },
        autoplay: {
            delay: 3000,
        }
    })

    const hb = document.querySelector('.menu__btn');
    const menu = document.querySelector('.header');
    const body = document.querySelector('body');

    hb.addEventListener('click', function() {
        menu.classList.toggle('active');
        body.classList.toggle('lock');
    })
})