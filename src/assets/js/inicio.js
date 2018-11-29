$(document).ready(function () {
    $('.navbar-toggle').on('click', function (e) {
      $('.side-nav').toggleClass("open");
      $('#wrapper').toggleClass("open");
      e.preventDefault();
    });
  });