$('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='../img/slider/prev-arrow.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='../img/slider/next-arrow.png'>"
  }
)

$("a#single_image").fancybox();

menu.onclick = function myFunction(){
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar") {
      x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
