
(($) => {
  $.fn.slider = function(){

    let data = $('ul.data li');
    let target;

    data.hide().first().show();

    function sliderResponse(target) {
        data.fadeOut(300).eq(target).fadeIn(300);
    }

    $('#sliderBar').change(function() {
        target = $('#sliderBar').val();
        sliderResponse(target);
    });
  }

})(jQuery);

$('ul.data li').slider();
