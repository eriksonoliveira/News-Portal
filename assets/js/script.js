var slideWidth = $('#slideshow').outerWidth();
var slideItem = 0;
var carouselTimer = 0;

$(document).ready(function() {
  changeCircleColor();

  carouselTimer = setInterval(moveSlide, 4000);

  setSlideWidth();
})

//show search field on search button click
$("#search-btn").hover(function() {
  $(".top-search").addClass('show-search');
});

//Select slides and assign them the slideshow width for RWD
function setSlideWidth() {
  $.each($(".slide"), function() {
    $(this).css("width", slideWidth);
  })
}

//Create slide animation
function moveSlide() {
  if(slideItem >= 3) {
    slideItem = 0;
  } else {
    slideItem++;
  }

  changeCircleColor();

  $('.slideshow-area').css("margin-left", (slideWidth * slideItem * (-1)) + "px");
}

//move slide when the user clicks on the circle
function changeSlide(pos) {
  slideItem = pos;
  changeCircleColor();
  clearInterval(carouselTimer);
  carouselTimer = setInterval(moveSlide, 4000);

  $('.slideshow-area').css("margin-left", (slideWidth * slideItem * (-1)) + "px");
}

//change circle's color so that the user can identify which is active
function changeCircleColor() {
  $(".circle").each(function() {
    var circleId = $(this).attr('id');
    if(circleId == slideItem){

    $(this).css("background-color", "#888");
    } else {

    $(this).css("background-color", "#CCC");
    }
  })
}

//Control the display of the menu on small screens
function toggleMenu() {
  var menu = document.getElementById("menu");
  //var isVisible = window.getComputedStyle(menu, null).getPropertyValue('display');

  //if (isVisible == "none") {
  if (menu.style.display == "none" || menu.style.display == "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "";
  }
}

//Control the display of submenus on small screens
  $(".menuitem").click(function(){
    $(this).find(".submenu").toggleClass("showSubmenu");
  });

  // Close the dropdown if the user clicks outside of it
  /*window.onclick = function(event) {
    if (!event.target.matches('.menuitem')) {

      var dropdowns = document.getElementsByClassName("submenu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('showSubmenu')) {
          openDropdown.classList.remove('showSubmenu');
        }
      }
    }
  }*/