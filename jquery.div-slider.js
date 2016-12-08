
(($) => {
    $.fn.slider = function (options) {
        let $this = this;
        let $current = null;
        let currentPosition = 0;

        $this.addClass("slider").mousedown((event) => {
            $current = $(event.currentTarget);
            currentTop = $current.offset().top;
        });

        $(document).mousemove((event) => {
            if ($current) {
                // let newCss = newPosition + "px;";
                let newPosition = event.pageX
                if(newPosition >= 460){ //max slider value
                  newPosition = 438; //max slider value - knob width - borderlength*2
                }else if(newPosition < 60){ //min slider value
                  newPosition = 60;
                }
                $current.offset({top:currentTop, left: newPosition});
                $current.data({ 'value' : newPosition});

            }
        }).mouseup(() => {
            $current = null;
        });

        return $this;
    };
})(jQuery);
//
// (($) => {
//   $.fn.slider = function(){
//
//     let data = $('ul.data li');
//     let target;
//
//     data.hide().first().show();
//
//     function sliderResponse(target) {
//         data.fadeOut(300).eq(target).fadeIn(300);
//     }
//
//     $('#sliderBar').change(function() {
//         target = $('#sliderBar').val();
//         sliderResponse(target);
//     });
//
//
//
//   };
//
// })(jQuery);

$('.knob').slider();
