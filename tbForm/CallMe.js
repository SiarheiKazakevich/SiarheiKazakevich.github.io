 $(document).ready(function(){
	
	$(".tbForm_CallMe.jump").css({"position":"absolute", "top":"-100px", "right":"50px", "transition": "top .9s cubic-bezier(.65, 1.95, .03, .32) 0.5s"});
	tbForm_Return_Button ();
	
	
	$(window).scroll(function(){
		tbForm_Return_Button();
	});	
	$(window).resize(function(){
		tbForm_Return_Button();
	});

	function  tbForm_Return_Button (){
		var r=getPageSize();docW=r[0];docH=r[1];winW=r[2];winH=r[3];
		var y=$(window).scrollTop();	 y=y+winH-100;
	  	$(".tbForm_CallMe.jump").css({"position":"absolute", "top": y+"px", "right": "50px"});
	}



//определение высоты и ширины документа, а также высоты и ширины окна браузера
function  getPageSize(){
           var xScroll, yScroll;

           if (window.innerHeight && window.scrollMaxY) {
                   xScroll = document.body.scrollWidth;
                   yScroll = window.innerHeight + window.scrollMaxY;
           } else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
                   xScroll = document.body.scrollWidth;
                   yScroll = document.body.scrollHeight;
           } else if (document.documentElement && document.documentElement.scrollHeight > document.documentElement.offsetHeight){ // Explorer 6 strict mode
                   xScroll = document.documentElement.scrollWidth;
                   yScroll = document.documentElement.scrollHeight;
           } else { // Explorer Mac...would also work in Mozilla and Safari
                   xScroll = document.body.offsetWidth;
                   yScroll = document.body.offsetHeight;
           }

           var windowWidth, windowHeight;
           if (self.innerHeight) { // all except Explorer
                   windowWidth = self.innerWidth;
                   windowHeight = self.innerHeight;
           } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
                   windowWidth = document.documentElement.clientWidth;
                   windowHeight = document.documentElement.clientHeight;
           } else if (document.body) { // other Explorers
                   windowWidth = document.body.clientWidth;
                   windowHeight = document.body.clientHeight;
           }

           // for small pages with total height less then height of the viewport
           if(yScroll < windowHeight){
                   pageHeight = windowHeight;
           } else {
                   pageHeight = yScroll;
           }

           // for small pages with total width less then width of the viewport
           if(xScroll < windowWidth){
                   pageWidth = windowWidth;
           } else {
                   pageWidth = xScroll;
           }

           return [pageWidth,pageHeight,windowWidth,windowHeight];
    }
	
	
 });