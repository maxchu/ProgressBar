var Display = function () {}

Display.prototype.buttons = function (buttons) {
	var node = document.createElement('div');
	var i;
	for (i = 0; i < buttons.length; i++) {
		var el = document.createElement('button');

		el.setAttribute('class', 'progress-button');
		el.setAttribute('data-increment', buttons[i]);
		el.innerHTML = buttons[i];

		node.appendChild(el);
	}
	
	return node;
}

Display.prototype.bars = function (bars, limit) {
	var node = document.createElement('div');
	var i;
	for (i = 0; i < bars.length; i++) {
		var el = document.createElement('div');

		el.setAttribute('id', 'progress' + i);
		el.setAttribute('class', 'progress-wrap blue-bar');
		el.setAttribute('data-value', bars[i]);
		var percentage = parseInt(bars[i] / limit * 100);
		percentage = percentage > 100 ? 100 : percentage;
		el.setAttribute('data-percent', percentage);

		var child = document.createElement('div');
		child.setAttribute('class', 'progress-bar progress');
		el.appendChild(child);

		child = document.createElement('div');
		child.setAttribute('data-limit', limit);
		child.setAttribute('class', 'progress-text');
		child.innerHTML = bars[i] + '/' + limit + ' (' + percentage + '%)';
		el.appendChild(child);

		node.appendChild(el);
	}
	
	return node;
}

Display.prototype.select = function (bars) {
	var select = document.createElement('select');
	select.setAttribute('id', 'progress-bar-items');
	select.setAttribute('class', 'col-xl-1 col-lg-1 col-md-2 col-sm-3');

	var i;
	for (i = 0; i < bars.length; i++) {
		select.options[i] = new Option('#progress ' + (i + 1), '#progress' + i);
	}
	
	return select;
}
