const markdown = document.getElementById('markdown');
const slidesContainer = document.getElementById('slides');
const prevSlideBtn = document.getElementById('prevSlide');
const nextSlideBtn = document.getElementById('nextSlide');
const fullscreenBtn = document.getElementById('fullscreen');
const exportBtn = document.getElementById('export');
const loadFileBtn = document.getElementById('loadFile');
const saveMarkdownBtn = document.getElementById('saveMarkdown');
const fileInput = document.getElementById('fileInput');

let currentSlide = 0;

function renderSlides() {
  const markdownText = markdown.value;
  const htmlText = marked.parse(markdownText);

  const slides = htmlText.split('<hr>').map(slide => `<div class="slide">${slide}</div>`).join('');

  slidesContainer.innerHTML = slides;
  showSlide(currentSlide);
}

function showSlide(index) {
  const slides = slidesContainer.getElementsByClassName('slide');

  if (index < 0 || index >= slides.length) {
    return;
  }

  slides[currentSlide].classList.remove('active');
  slides[index].classList.add('active');
  currentSlide = index;

  prevSlideBtn.disabled = index === 0;
  nextSlideBtn.disabled = index === slides.length - 1;
}

function goToPrevSlide() {
  showSlide(currentSlide - 1);
}

function goToNextSlide() {
  showSlide(currentSlide + 1);
}

function enterFullscreen() {
  const elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

function exportSlides() {
  let slides = slidesContainer.innerHTML;

  // Add link to CSS file in the <head>
  slides = `<html><head><link rel="stylesheet" href="slidecss.css"></head><body>${slides}`;

  // Add script tag before closing </body>
  slides += '<script src="slidescript.js"></script></body></html>';

  const blob = new Blob([slides], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'slides.html';
  a.click();
}

function saveMarkdown() {
  const markdownContent = markdown.value;
  const blob = new Blob([markdownContent], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');

  a.href = url;
  a.download = 'slides.md';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function loadFile() {
  fileInput.click();
}

function handleFileSelect(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    markdown.value = e.target.result;
    renderSlides();
  };

  reader.readAsText(file);
}

markdown.addEventListener('input', renderSlides);
prevSlideBtn.addEventListener('click', goToPrevSlide);
nextSlideBtn.addEventListener('click', goToNextSlide);
fullscreenBtn.addEventListener('click', enterFullscreen);
exportBtn.addEventListener('click', exportSlides);
saveMarkdownBtn.addEventListener('click', saveMarkdown);
loadFileBtn.addEventListener('click', loadFile);
fileInput.addEventListener('change', handleFileSelect);

renderSlides();
