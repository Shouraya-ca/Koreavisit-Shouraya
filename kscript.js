let SlideKOREA = 0;

function showSlides (){
    let slides= document.querySelectorAll('.slide');
    if (SlideKOREA >= slides.length) {SlideKOREA =0; }
    if (SlideKOREA < 0){ SlideKOREA= slides.length -1;}
    slides.forEach((slide, KOREA ) =>
    {
        slide.style.display = ( KOREA === SlideKOREA)? "block": "none" ;
    });
    SlideKOREA++;
    setTimeout(showSlides,3000);
}
showSlides();