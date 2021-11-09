$(function () {
  $('.js-btn').on('click', function () {
    $('.menu , .btn-line').toggleClass('open');  
  })
});

$(function(){
  $('.menu-link').on('click', function(){
    $('.menu , .btn-line').removeClass('open');
  })
});

$(function () {
  $('.accordion__title').each(function(){
    $(this).on('click', function () {
      $(this).next().slideToggle();
      $(this).toggleClass('open');   
    });
  });
});

$(function(){
  $("a[href^=#]:not([href=#])").click(function(){
    var target = $($(this).attr("href")).offset().top;
    target -= 94;
    $("html, body").animate({scrollTop:target}, 500)
    return false;
  });
});

$(document).ready(function () {

  const $submitBtn = $('#js-submit')
  $('#form input,#form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $('#form #privacyCheck').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);

    } else {
      $submitBtn.prop('disabled', true);
    }
  });
});

$(document).ready(function () {
  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfErDTUCb7wWB4XW1COSw88_BqimqeHAWGH4L6ZcE3dPYFARA/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".submit-btn").fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });
});