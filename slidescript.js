// JavaScript code for slide functionality

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}

// Listen for arrow key presses to change slides
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    plusSlides(-1);
  } else if (event.key === 'ArrowRight') {
    plusSlides(1);
  }
});
