(($) => {
  $.fn.slide = function(){
    var data = $('ul.data li');
    var target;

    data.hide().first().show();

    function sliderResponse(target) {
        data.fadeOut(300).eq(target).fadeIn(300);
        triggers.removeClass('active').eq(target).addClass('active');
    }

    $('#sliderBar').change(function() {
        target = $('#sliderBar').val();
        sliderResponse(target);
    });
  }

})(jQuery);




var slider = function(){
  var data = $('ul.data li');
  var target;

  data.hide().first().show();

  function sliderResponse(target) {
      data.fadeOut(300).eq(target).fadeIn(300);
      triggers.removeClass('active').eq(target).addClass('active');
  }

  $('#sliderBar').change(function() {
      target = $('#sliderBar').val();
      sliderResponse(target);
  });
};


$("#Slider").submit(slider);
