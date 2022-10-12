import '../index.html'
import '../style/style.css' // Импортируем стили css
// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

 const swiper = new Swiper('.top-slider', {
     modules: [Navigation, Pagination],
     pagination: {
         el: '.swiper-pagination',
     },
     navigation: {
         nextEl: '.top-slider__button-next',
         prevEl: '.top-slider__button-prev',
     }
 });