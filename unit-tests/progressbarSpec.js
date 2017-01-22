var bar = document.createElement('div');
bar.innerHTML = '<div id="progress1" class="progress-wrap" data-percent="25"><div class="progress-bar progress"></div><div class="progress-text">25%</div></div>';
var limit = 100;

describe('Test values and colours', function() {
	var progressbar;

	beforeEach(function() {
		progressbar = new ProgressBar(bar, limit);
	});

	it('If value is minus, it should get 0', function() {
		progressbar.setValue('-10');
		expect(progressbar.getData('data-percent')).toEqual('0');
	});

	it('If value is greater than 100, it should get 100', function() {
		progressbar.setValue('120');
		progressbar.updateProgress();
		expect(progressbar.getData('data-percent')).toEqual('100');
		expect(progressbar.el.firstChild.classList).toContain('red-bar');
	});

	it('If value is less than 100, the colour should be blue', function() {
		progressbar.setValue('50');
		progressbar.updateProgress();
		expect(progressbar.el.firstChild.classList).not.toContain('red-bar');
	});

	it('If value is greater than 100, the colour should be red', function() {
		progressbar.setValue('120');
		progressbar.updateProgress();
		expect(progressbar.el.firstChild.classList).toContain('red-bar');
	});

});
