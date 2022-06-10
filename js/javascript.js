"use strict"

$(function () {
  $("#accordion").accordion();
});

$(document).ready(function () {
  $(".box .btn").click(function () {
    $(".menuBar").slideToggle("slow");
  });


  $(window).scroll(function () {
    if ($(this).scrollTop() > 1060) {
      $("#gotop").fadeIn("slow");
    }
    else {
      $("#gotop").fadeOut("slow");
    }
  })

  let btnTotal = document.querySelectorAll(".mybtn");

  for (let i = 0; i < btnTotal.length; i++) {
    btnTotal[i].addEventListener('click', function () {
      let current = this;
      // console.log(current);
      for (let i = 0; i < btnTotal.length; i++) {
        if (current != btnTotal[i]) {
          btnTotal[i].classList.remove("act");
        }
        else if (current.classList.contains("act") === true) {
          current.classList.remove("act");
        }
        else {
          current.classList.add("act");
        }
      }
    })
  }

  let oneTotal = document.querySelectorAll(".one");

  for (let i = 0; i < oneTotal.length; i++) {
    oneTotal[i].addEventListener('click', function () {
      let current = this;
      console.log(current);

      for (let i = 0; i < oneTotal.length; i++) {
        if (current != oneTotal[i]) {
          oneTotal[i].classList.remove("one1");
        }
        else if (current.classList.contains("one1") === true) {
          current.classList.remove("one1");
        }
        else {
          current.classList.add("one1");
        }
      }
    })
  }




  $("#gotop").click(function () {

    $("body,html").animate({
      "scrollTop": "0"
    }, "slow");

  })

  $("nav a").click(function (e) {
    e.preventDefault();
    var x = $(this).attr("href");
    $("body,html").animate({
      "scrollTop": $(x).offset().top - 80
    }, "slow")
  })

  $(".sign a").click(function (e) {
    e.preventDefault();
    var x = $(this).attr("href");
    $("body,html").animate({
      "scrollTop": $(x).offset().top - 80
    }, "slow")
    console.log(x);
  })
})

document.querySelector(".btn").addEventListener('click', function () {
  this.classList.toggle("active");
})



document.querySelector(".wrap-2 .pos1 button").addEventListener('click', function () {
  document.querySelector(".rel video").play();
  document.querySelector(".pos2").style.display = "none";
  document.querySelector(".pos1 button").style.display = "none";
  document.querySelector(".rel video").setAttribute("controls", "");
})


/*  wrap six slider */
let slideIndex = 1
showSlide(slideIndex);

function plusSlide(n) {
  showSlide(slideIndex += n);
}
function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dots")
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slideIndex.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
console.log("done");








