window.onload = function() {
	var paper = document.getElementById('paper');
	var write = document.getElementById('write');

	write.width = paper.offsetWidth;
	write.height = paper.offsetHeight;
	tool = write.getContext('2d');

	prepare();
}

var tool = 0;
var write_down = 0;
function change_color_d() {
	write_down = 1
	tool.moveTo(event.offsetX, event.offsetY);
}
function change_color_u() {
	write_down = 0
}
function change_color_m() {
	if (write_down) {
		tool.lineTo(event.offsetX, event.offsetY);
		tool.stroke();
	}
}


function prepare(){
	var paper = document.getElementById('write');
	paper.addEventListener('touchstart', function (e) {
		write_down = 1
		tool.moveTo(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
	})
	paper.addEventListener('touchend', function () {
		write_down = 0
	})
	paper.addEventListener('touchmove', function (e) {
		if (write_down) {
			tool.lineTo(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
			tool.stroke();
		}
	})
}