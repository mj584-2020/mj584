// Government Undocumented Interactive JS

// console.log('gov-undocumented-int.js is loaded');

$(document).ready(function () {
  $("#r-2-c-2").click(function () {
    $("#PEP-body").fadeIn(300);
    $(".container-body").css("display", "none");
    $("#pep-slide-buttons").css({ "display": "flex", "opacity": "1" });
  });

  $("#PEP-button").click(function () {
    $("#PEP-body").fadeOut(300);
    $(".container-body").css("display", "flex");
  });

  $("#r-2-c-1").click(function () {
    $("#passport-body").fadeIn(300);
    $(".container-body").css("display", "none");
    $("#passport-slide-buttons").css({ "display": "flex", "opacity": "1" });
  });

  $("#passport-button").click(function () {
    $("#passport-body").fadeOut(300);
    $(".container-body").css("display", "flex");
  });

  $("#r-2-c-3").click(function () {
    $("#ID-body").fadeIn(300);
    $(".container-body").css("display", "none");
    $("#ID-slide-buttons").css({ "display": "flex", "opacity": "1" });
  });

  $("#ID-button").click(function () {
    $("#ID-body").fadeOut(300);
    $(".container-body").css("display", "flex");
  });
});


// passport-slideshow-js
var slideIndexPassport = 1;
showSlidesPassport(slideIndexPassport);

function showSlidesPassport(n) {
  var i;
  var slides = $(".mySlides-passport");
  var dots = $(".dot-passport");
  if (n > slides.length) { slideIndexPassport = 1 }
  if (n < 1) { slideIndexPassport = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexPassport - 1].style.display = "flex";
  dots[slideIndexPassport - 1].className += " active";
}

function plusSlidesPassport(n) {
  showSlidesPassport(slideIndexPassport += n);
}

function currentSlidePassport(n) {
  showSlidesPassport(slideIndexPassport = n);
}

// pep-clideshow-js
var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// national id slideshow js
var slideIndexID = 1;
showSlidesID(slideIndexID);

function showSlidesID(n) {
  var i;
  var slides = $(".mySlides-ID");
  var dots = $(".dot-ID");
  if (n > slides.length) { slideIndexID = 1 }
  if (n < 1) { slideIndexID = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexID - 1].style.display = "flex";
  dots[slideIndexID - 1].className += " active";
}

function plusSlidesID(n) {
  showSlidesID(slideIndexID += n);
}

function currentSlideID(n) {
  showSlidesID(slideIndexID = n);
}

//Birthright
var slideIndexBirthright = 1;
showSlidesBirthright(slideIndexBirthright);

function showSlidesBirthright(n) {
  var i;
  var slides = $(".mySlides-birthright");
  var dots = $(".dot-Birthright");
  if (n > slides.length) { slideIndexBirthright = 1 }
  if (n < 1) { slideIndexBirthright = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexBirthright - 1].style.display = "flex";
  dots[slideIndexBirthright - 1].className += " active";
}

function plusSlidesBirthright(n) {
  showSlidesBirthright(slideIndexBirthright += n);
}

function currentSlideBirthright(n) {
  showSlidesBirthright(slideIndexBirthright = n);
}
