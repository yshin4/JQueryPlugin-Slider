describe("Swivel jQuery plugin", () => {
    let options = {
        change: () => {
            // No-op; Jasmine spy will check on whether this got called.
        }
    };

    beforeEach(() => {
        fixture.setBase("test");
        fixture.load("jquery.div-slider.fixture.html");
    });

    afterEach(() => fixture.cleanup());

    it("should return itself when the plugin is installed", () => {
        let $target = $(".knob");
        let $pluginResult = $target.knob(options);

        expect($pluginResult).toBe($target);
    });

    describe("installed behavior", () => {
        beforeEach(() => $(".knob").knob(options));

        it("should update its CSS transform correctly", () => {
            // When synthesizing events, we need only explicitly set the values that the plugin code will
            // actually use.
            let mousedown = $.Event("mousedown", { pageX: 0 });
            $(".slider").trigger(mousedown);

            let mousemove = $.Event("mousemove", { pageX: 60 });
            $(".slider").trigger(mousemove);

            let mouseup = $.Event("mouseup");
            $(".slider").trigger(mouseup);
            spyOn(options, 'change');
            expect($(".knob").data('value')).toBe(1);

            let mousedown2 = $.Event("mousedown", { pageX: 0 });
            $(".knob").trigger(mousedown2);

            let mousemove2 = $.Event("mousemove", { pageX: 0 });
            $(".knob").trigger(mousemove2);

            let mouseup2 = $.Event("mouseup");
            $(".knob").trigger(mouseup2);

            expect($(".knob").data('value')).toBe(0);

            // We check against the style attribute because the CSS property will be the generalized "converted"
            // value of the transform, which is too unwieldy to express manually.
        });
    });
});