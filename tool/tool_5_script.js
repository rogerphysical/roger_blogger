var co_paper = 0;
var co_write = 0;
var tool = 0;

var co_paper_left = 0;
var co_paper_top = 0;

var start = 0;
function co_start(th) {
	co_paper = document.getElementById('co_paper');
	co_write = document.getElementById('co_write');

	co_paper.style.height = 'calc(100vh - 100px)';
	setTimeout(()=> co_reset(), 1000);

	tool = co_write.getContext('2d');

	prepare();
	co_start_end(th);

	th.onclick = function() {
		co_start_end(th);
	}
}
function co_start_end(th) {
	if (start == 0) {
		var target = $("#co_bottom").offset().top;
		$('html, body').animate({scrollTop: target}, 200);

		document.body.style.overflowY = 'hidden';

		th.innerHTML = 'end';
		start = 1;
	}
	else {
		document.body.style.overflowY = 'unset';
		th.innerHTML = 'start';
		start = 0;
	}
}

function co_reset() {
	// tool.fillRect(0, 0, co_paper.offsetWidth, co_paper.offsetHeight);
	co_write.width = co_paper.offsetWidth;
	co_write.height = co_paper.offsetHeight;
}

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
	co_write.addEventListener('touchstart', function (e) {
		// e.preventDefault();
		var co_paper_rect = co_paper.getBoundingClientRect();
		co_paper_left = co_paper_rect.x;
		co_paper_top = co_paper_rect.y;

		write_down = 1
		tool.moveTo(e.changedTouches[0].clientX-co_paper_left, e.changedTouches[0].clientY-co_paper_top);
	})
	co_write.addEventListener('touchend', function (e) {
		// e.preventDefault();
		write_down = 0
	})
	co_write.addEventListener('touchmove', function (e) {
		e.preventDefault();
		if (write_down) {
			tool.lineTo(e.changedTouches[0].clientX-co_paper_left, e.changedTouches[0].clientY-co_paper_top);
			tool.stroke();
		}
	})
}