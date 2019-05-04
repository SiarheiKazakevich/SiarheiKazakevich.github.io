/*Главтекст*/
var carousels8 = document.querySelectorAll('#carousels8 .carousel8');
var currentCarousel8 = 0;
var carouselInterval8 = setInterval(nextCarousel8,9000); /* Интервал между картинками */
function nextCarousel8(){
carousels8[currentCarousel8].className = 'carousel8';
currentCarousel8 = (currentCarousel8+1)%carousels8.length;
carousels8[currentCarousel8].className = 'carousel8 demonstration8';
}
