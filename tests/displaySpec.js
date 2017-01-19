describe('Test creating DOM element', function() {
	var display;
	var config = {"buttons":[38,7,-34,-15],"bars":[68,65],"limit":140};

	beforeEach(function() {
		display = new Display();
	});

	it('create 4 buttons', function() {
		var buttons = display.buttons(config.buttons);
		expect(buttons.childNodes.length).toEqual(4);
	});

	it('create 2 bars', function() {
		var bars = display.buttons(config.bars);
		expect(bars.childNodes.length).toEqual(2);
	});

});
