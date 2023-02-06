let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let mugs = document.getElementsByClassName("relatos_mugs");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < mugs.length; i++) {
    mugs[i].style.fill = "white";
  }
  slides[slideIndex-1].style.display = "block";
  mugs[slideIndex-1].style.fill = "rgb(239 , 163 , 49)";
}