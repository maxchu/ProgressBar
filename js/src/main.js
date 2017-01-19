function loadJSON(callback) {   
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', 'http://pb-api.herokuapp.com/bars', true); 
	xobj.onreadystatechange = function () {
	if (xobj.readyState == 4 && xobj.status == "200") {
		return callback(xobj.responseText);
	}
	};
	xobj.send(null);  
}

function updateProgressBar() {
	var progress = document.getElementsByClassName('progress-wrap');
	var i;
	for (i = 0; i < progress.length; i++) {
		var curBar = new ProgressBar(progress[i]);
		curBar.updateProgress();
	}
}

loadJSON(function(response) {
	var config = JSON.parse(response);
	var display = new Display();

	var container = document.getElementById('progress-bar-container');
	container.appendChild(display.bars(config.bars, config.limit));
	container.appendChild(display.select(config.bars));
	container.appendChild(display.buttons(config.buttons));

	updateProgressBar();

	var buttons = document.getElementsByClassName('progress-button');
	var i;
	for (i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function(e) {
			e.stopImmediatePropagation();

			var increment = parseInt(e.target.getAttribute('data-increment'));
			var curBar = new ProgressBar(document.querySelector(document.querySelector('#progress-bar-items option:checked').value), config.limit);
			var newValue = parseInt(curBar.getData('data-value')) + increment;
			
			curBar.setValue(newValue);
			curBar.updateProgress();
		});
	}
});

window.addEventListener('resize', updateProgressBar, false);

