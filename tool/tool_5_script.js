// window.onload = function() {

// }

var start = 0;
function co_start_end(th) {
	if (start == 0) {
		var target = $("#co_bottom").offset().top;
		$('html, body').animate({scrollTop: target}, 200);

		document.body.style.overflowY = 'hidden';
		th.innerHTML = '結束書寫';
		start = 1;
	}
	else {
		document.body.style.overflowY = 'unset';
		th.innerHTML = '開始書寫';
		start = 0;
	}
}

function co_reset() {
	// document.frames["frameNameHere"].location.reload();
	// document.frames('co_paper').location.reload();
	document.getElementById('co_paper').contentWindow.location.reload();
}