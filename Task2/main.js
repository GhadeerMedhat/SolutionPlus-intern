
// Array containing URLs of images for the slides
var currentIndex = 0;
var slides = [
    './images/image1.jpg',
    './images/image2.jpg',
    './images/image3.jpg',
    './images/image4.jpg',
    './images/image5.jpg',
];
var sliderContainer = document.getElementById('slider-container');
var autoplayButton = document.getElementById('autoplayBtn'); // Reference to autoplay button

// Function to create image elements and append them to the slider container
slides.forEach(function(imageUrl){
    var img = document.createElement('img');
    img.src=imageUrl;
    sliderContainer.appendChild(img);
});

// Function to show a specific slide based on index

function showSlide(index) {
    var slides = document.querySelectorAll('#slider-container img');
    slides.forEach(function(slide) {
        slide.classList.remove('active');
    });
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    slides[currentIndex].classList.add('active');
}

function prevSlide(){
    toggleButtonColor(); 
    showSlide(currentIndex - 1);
}

function nextSlide(){
    toggleButtonColor();
    showSlide(currentIndex + 1);
}

function randomSlide(){
    toggleButtonColor(); 
    var randomIndex = Math.floor(Math.random() * slides.length);
    showSlide(randomIndex);
}

var autoplayInterval;

function toggleAutoplay() {
    if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
    } else {
        autoplayInterval = setInterval(nextSlide, 1000); 
    }
    toggleButtonColor(); 
}

function toggleButtonColor() {
    
    if (autoplayInterval) {
        autoplayButton.style.backgroundColor = 'red';
    } else {
        autoplayButton.style.backgroundColor = 'green';
    }
}

showSlide(currentIndex);
