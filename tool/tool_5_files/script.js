pix = '';
	for (var i = 0; i < 10**4; i++) {
		pix += '<div class=pix \
		onmousedown=change_color_do(this) \
		onmouseup=change_color_up(this) \
		onmouseenter=change_color_en(this) \
		></div>';
	}

window.onload = function() {
	document.getElementById('write').innerHTML = pix;
}

write_down = 1;
function change_color_do(th) {
	if (write_down == 1) {
		th.style.backgroundColor = '#0F0';
		write_down = 0;
	}
}
function change_color_up(th) {
	if (write_down == 0) {
		th.style.backgroundColor = '#F00';
		write_down = 1;
	}
}
function change_color_en(th) {
	if (write_down == 0) {
		th.style.backgroundColor = '#444';
	}
}