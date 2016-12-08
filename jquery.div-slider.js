

(($) => {
    $.fn.knob = function (options) {
        let $this = this;
        let $current = null;
        let currentPosition = 0;
        let knobWidth = $('.knob').width();
        let maxValue = $('.slider').width() + $('.slider').offset().left + 1;
        let minValue = $('.slider').offset().left;


        $this.addClass("slider").mousedown((event) => {
            $current = $(event.currentTarget);
            currentTop = $current.offset().top;
        });

        $(document).mousemove((event) => {
            if ($current) {
                let newPosition = event.pageX
                if(newPosition >= maxValue){
                  newPosition = maxValue - knobWidth;
                }else if(newPosition < minValue){
                  newPosition = minValue;
                }
                $current.offset({top:currentTop, left: newPosition});

            }
        }).mouseup(() => {
            $current = null;

        });

        return $this;
    };
})(jQuery);


(($) => {
  $.fn.slider = function(){

    let data = $('ul.data li');
    let target;

    data.hide().first().show();

    function sliderResponse(target) {
        data.fadeOut(300).eq(target).fadeIn(300);
    }

    $('knob').change(function() {
        target = $('knob').offset().left();
        sliderResponse(target);
    });

  };

})(jQuery);


$('.knob').knob();
$('ul.data li').slider();
