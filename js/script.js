$(document).ready(function() {
  // Smooth scroll to the download section
  $('.cta-button').click(function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $('#download').offset().top
      }, 1000);
  });

  // Display a simple welcome alert when the user visits the page
  setTimeout(function() {
      alert("Welcome to My New App! We're glad to have you here.");
  }, 2000);
});
