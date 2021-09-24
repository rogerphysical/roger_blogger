var co_paper = 0;
var co_write = 0;
var tool = 0;

var co_record = 0;

function co_start(th) {
	co_paper = document.getElementById('co_paper');
	co_write = document.getElementById('co_write');
	co_record = document.getElementById('co_record');

	co_paper.style.height = 'calc(100vh - 150px)';
	setTimeout(()=> co_reset(), 1000);

	tool = co_write.getContext('2d');

	prepare();
	co_start_end(th);

	th.setAttribute("onclick", "co_start_end('th')");
	th.innerHTML = 'focus';

	document.getElementById('co_bottom').innerHTML += '<div id="co_reset" class="co_b c_i_link" onclick="co_reset()">reset</div>';
}
function co_start_end(th) {
	var target = $("#co_bottom").offset().top;
	$('html, body').animate({scrollTop: target}, 200);
}

//reset
function co_reset() {
	// tool.fillRect(0, 0, co_paper.offsetWidth, co_paper.offsetHeight);
	co_write.width = co_paper.offsetWidth;
	co_write.height = co_paper.offsetHeight;

	co_record.innerHTML = '0';
}

//判斷是否下筆
var write_down = 0;

//滑鼠
function change_color_d(x, y) {
	write_down = 1
	tool.moveTo(x, y);
	// console.log(x, y);
}
function change_color_u() {
	write_down = 0
	co_record.innerHTML = parseInt(co_record.innerHTML)+1;
}
function change_color_m(x, y) {
	if (write_down) {
		tool.lineTo(x, y);
		tool.stroke();//繪製
		// console.log(x, y);
	}
}

//觸控
var co_paper_rect = 0;
var co_paper_left = 0;
var co_paper_top = 0;
function prepare(){
	co_write.addEventListener('touchstart', function (e) {
		// e.preventDefault();
		//觸控資訊
		co_paper_rect = co_paper.getBoundingClientRect();
		co_paper_left = co_paper_rect.x;
		co_paper_top = co_paper_rect.y;
		change_color_d(e.changedTouches[0].clientX-co_paper_left, e.changedTouches[0].clientY-co_paper_top);
	})
	co_write.addEventListener('touchend', function (e) {
		// e.preventDefault();
		change_color_u();
	})
	co_write.addEventListener('touchmove', function (e) {
		e.preventDefault();
		change_color_m(e.changedTouches[0].clientX-co_paper_left, e.changedTouches[0].clientY-co_paper_top);
	})
}