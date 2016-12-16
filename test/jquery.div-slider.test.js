describe("Dropdown div-slider plugin", () => {
    let options = {
        initial: "Potato",

        options: [
            "Potato",
            "Pie",
            "Cabbage"
        ],

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
        let $target = $("slider");
        let $pluginResult = $target.slider(options);

        expect($pluginResult).toBe($target);
    });

    describe("installed behavior", () => {
        beforeEach(() => $(".slider").knob(options));

        it("should build the correct elements", () => {
            // Not exhaustive, but should be sufficient.
            expect($(".slider").hasClass("ul.data li")).toBe(true);
            expect($(".slider").find("ul.data li").length).toBe(1);
            expect($(".slider").find("ul.data li").text())
                .toBe(options.initial);
        });
    });
});