/*глушак*/
var carousels = document.querySelectorAll('#carousels .carousel');
var currentCarousel = 0;
var carouselInterval = setInterval(nextCarousel,9000); /* Интервал между картинками */
function nextCarousel(){
carousels[currentCarousel].className = 'carousel';
currentCarousel = (currentCarousel+1)%carousels.length;
carousels[currentCarousel].className = 'carousel demonstration';
}
/*колёса*/
var carousels1 = document.querySelectorAll('#carousels1 .carousel1');
var currentCarousel1 = 0;
var carouselInterval1 = setInterval(nextCarousel1,9000); /* Интервал между картинками */
function nextCarousel1(){
carousels1[currentCarousel1].className = 'carousel1';
currentCarousel1 = (currentCarousel1+1)%carousels1.length;
carousels1[currentCarousel1].className = 'carousel1 demonstration1';
}
/*двс*/
var carousels2 = document.querySelectorAll('#carousels2 .carousel2');
var currentCarousel2 = 0;
var carouselInterval2 = setInterval(nextCarousel2,9000); /* Интервал между картинками */
function nextCarousel2(){
carousels2[currentCarousel2].className = 'carousel2';
currentCarousel2 = (currentCarousel2+1)%carousels2.length;
carousels2[currentCarousel2].className = 'carousel2 demonstration2';
}
/* тормоз */
var carousels3 = document.querySelectorAll('#carousels3 .carousel3');
var currentCarousel3 = 0;
var carouselInterval3 = setInterval(nextCarousel3,9000); /* Интервал между картинками */
function nextCarousel3(){
carousels3[currentCarousel3].className = 'carousel3';
currentCarousel3 = (currentCarousel3+1)%carousels3.length;
carousels3[currentCarousel3].className = 'carousel3 demonstration3';
}
/*кузов*/
var carousels4 = document.querySelectorAll('#carousels4 .carousel4');
var currentCarousel4 = 0;
var carouselInterval4 = setInterval(nextCarousel4,9000); /* Интервал между картинками */
function nextCarousel4(){
carousels4[currentCarousel4].className = 'carousel4';
currentCarousel4 = (currentCarousel4+1)%carousels4.length;
carousels4[currentCarousel4].className = 'carousel4 demonstration4';
}
/*подвес*/
var carousels5 = document.querySelectorAll('#carousels5 .carousel5');
var currentCarousel5 = 0;
var carouselInterval5 = setInterval(nextCarousel5,9000); /* Интервал между картинками */
function nextCarousel5(){
carousels5[currentCarousel5].className = 'carousel5';
currentCarousel5 = (currentCarousel5+1)%carousels5.length;
carousels5[currentCarousel5].className = 'carousel5 demonstration5';
}
/*фильтр*/
var carousels6 = document.querySelectorAll('#carousels6 .carousel6');
var currentCarousel6 = 0;
var carouselInterval6 = setInterval(nextCarousel6,9000); /* Интервал между картинками */
function nextCarousel6(){
carousels6[currentCarousel6].className = 'carousel6';
currentCarousel6 = (currentCarousel6+1)%carousels6.length;
carousels6[currentCarousel6].className = 'carousel6 demonstration6';
}
/*Главтекст*/
/*
var carousels8 = document.querySelectorAll('#carousels8 .carousel8');
var currentCarousel8 = 0;
var carouselInterval8 = setInterval(nextCarousel8,9000); *//* Интервал между картинками *//*
function nextCarousel8(){
carousels8[currentCarousel8].className = 'carousel8';
currentCarousel8 = (currentCarousel8+1)%carousels8.length;
carousels8[currentCarousel8].className = 'carousel8 demonstration8';
}*/
/* горящая буква*/
var lever = false; // Тумблер
var textBrightness = 80; // Яркость текста
var fireCount = 9;	// Величина пламени
var fireDelta = new Array();
var step = 10;	// Шаг колебаний
var angle = 0;	// Угол колебаний
var radius = 10;
function animate()
{
fireDelta[fireCount - step] = Math.random() * 2 - 1;
var e = document.getElementById("fire");
var s = "";
for (var i = 0; i < fireCount; i++) { if (s) s += ", ";
s += Math.round(fireDelta[(i + fireCount - step) % fireCount] * i) + "px " + (-2 * i -1) + "px " + (2 + i) + "px ";
s += "rgb(255, " + (255 - i * Math.floor(255 / (fireCount - 1))) + ", 0)";
}
e.style.textShadow = s;
e.style.color = "rgb(" +
(textBrightness + step % 2) + ", " +
textBrightness + ", " +
textBrightness + ")";
step = (step + 1) % fireCount;
angle -= 0.8;

if (angle <= 0) angle = Math.PI * 2; var e = document.getElementById("rgb");
var s =	Math.round(Math.cos(angle + Math.PI * 2 / 3) * radius) + "px 4px #0F0";
e.style.textShadow = s;
e.style.color = "rgb(" + (255 - step % 2) + ", 255, 255)";
}

function toggleAnimation()
{
for (var i = 0; i < fireCount; i++) fireDelta[i] = Math.random() * 2 - 1; if (lever)
{
window.clearInterval(lever);
lever = false;
}
else
lever = window.setInterval(function() { animate(); }, 100);
return false;
}
toggleAnimation();
/* конец горящая буква*/

/*масло*/
/*
var carousels7 = document.querySelectorAll('#carousels7 .carousel7');
var currentCarousel7 = 0;
var carouselInterval7 = setInterval(nextCarousel7,7000); /* Интервал между картинками */
/*
function nextCarousel7(){
carousels7[currentCarousel7].className = 'carousel7';
currentCarousel7 = (currentCarousel7+1)%carousels7.length;
carousels7[currentCarousel7].className = 'carousel7 demonstration7';
}*/