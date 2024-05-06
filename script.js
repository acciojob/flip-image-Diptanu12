
var image = document.getElementById('flip');


var initialSrc = "https://images.pexels.com/photos/6785279/pexels-photo-6785279.jpeg";
var finalSrc = "https://live.staticflickr.com/8138/29099429912_0659caf55b_b.jpg";

image.addEventListener('mouseover', function() {

    image.src = finalSrc;
});


image.addEventListener('mouseout', function() {

    image.src = initialSrc;
});