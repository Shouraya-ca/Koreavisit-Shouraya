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

let btn_islands=document.querySelector(".butt_île");
let btn_city=document.querySelector(".butt_ville");

btn_islands.addEventListener("click",(e)=>{
    islands.style.islands
});





