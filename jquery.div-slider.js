(($) => {
    $.fn.knob = function (options) {
        let $this = this;
        let $current = null;
        let knobWidth = $('.knob').width();
        let sliderWidth = Math.ceil($('.slider').width());
        let sliderPosition = $('.slider').offset().left;
        let maxValue = sliderWidth + sliderPosition + 1;
        let minValue = sliderPosition;
        let currentTop = $('.slider').offset().top;

        let valuePerStep = Math.ceil(sliderWidth / ($('ul.data li').length - 1));
        $('ul.data li').hide().first().show();

        $this.addClass("slider").mousedown((event) => {
            $current = $(event.currentTarget);
            currentTop = $current.offset().top;
        });

        $(document).mousemove((event) => {
            if ($current) {
                let newPosition = event.pageX;
                if (newPosition >= maxValue){
                    newPosition = maxValue - knobWidth;
                } else if (newPosition < minValue){
                    newPosition = minValue;
                }
                $current.offset({top: currentTop, left: newPosition});
                $current.data({'value': Math.ceil((newPosition - sliderPosition) / valuePerStep)});
            }

        }).mouseup(() => {
            if ($current){
                let data = $('ul.data li');
                let target = $current.data('value');

                var sliderResponse = function (target) {
                    data.fadeOut(300).eq(target).fadeIn(300);
                };
                sliderResponse(target);
                if ($.isFunction(options.change)) {
                    options.change.call($current, target + 1);
                }
            }
            $current = null;
        });

        return $this;
    };
})(jQuery);

// $('.knob').knob();
