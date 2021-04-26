/* eslint-disable */

$(document).ready(()=>{
  $(".menu__link-burger").click((event)=>{
    event.preventDefault();
    $(".dropdown-menu").toggleClass("fade-in");
  });
  $(".header-mob__burger").click((event)=>{
    event.preventDefault();
    $(".dropdown-mob").toggleClass("fade-in");
    //stop-scroll
    $("body").toggleClass("stop-scroll");
  });
  $(".dropdown-mob__close-icon").click((event)=>{
    event.preventDefault();
    $(".dropdown-mob").toggleClass("fade-in");
    //stop-scroll
    $("body").toggleClass("stop-scroll");
  });
});
