var slideIndex = 1;
var slides = $(".homePageSlider");
changeSlide(slideIndex);

//Next Previous control
function changeSlide(n){
  showSlides(slideIndex += n);
}

function showSlides(n){
  let i;
  if ( n > slides.length ) { slideIndex = 1 }
  if ( n < 1 ) { slideIndex = slides.length }
  for(i = 0; i< slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// var interval = setInterval(function(){
//   changeSlide(1);
// },2000);
