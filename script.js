var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


//nav bar
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function changeNav() {
  var x = document.getElementById("navbar");
  var y = document.getElementById("subnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    
  } else {
    x.className = "topnav";
  }
  y.classList.toggle("transform-active");

}

function transform() {
   var element = document.getElementById("t");
   element.classList.toggle("transform-active");
}

