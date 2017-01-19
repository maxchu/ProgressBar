var ProgressBar = function (el, limit) {
	this.el = el;
	this.limit = limit;
	return this;
}

ProgressBar.prototype.setValue = function (value) {
	if (value < 0) {
		value = 0;
	}
	this.el.setAttribute('data-value', value);
	var percentage = parseInt(value / this.limit * 100);
	percentage = percentage > 100 ? 100 : percentage;
	this.el.setAttribute('data-percent', percentage);
	this.el.lastChild.textContent = value + '/' + this.limit + ' (' + percentage + '%)';
}

ProgressBar.prototype.getData = function (name) {
	return this.el.getAttribute(name);
}

ProgressBar.prototype.updateProgress = function () {
	var progress = this.el.getAttribute('data-percent');
	if (progress >= 100) {
		this.el.firstChild.classList.add('red-bar');
	} else {
		this.el.firstChild.classList.remove('red-bar');
	}
	this.el.firstChild.style.width = progress + '%';
}

