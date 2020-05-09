function open_menu() {
	if (document.getElementById('h12').style.display == 'block') {
		$("#h12").fadeOut();
		document.getElementById('h11').style.backgroundColor = '#000';
		document.body.style.overflowY = 'unset';
	}
	else {
		$("#h12").slideDown();
		document.getElementById('h11').style.backgroundColor = '#F00';
		document.body.style.overflowY = 'hidden';
	}
}
function pic_l() {
	var a = document.getElementById('c2_fake').innerHTML;
	var ab = document.getElementById('c21').style.left;
	if (a+"%" == ab) {
		if (a != '0') {
			a -= -50;
		}
		else {
			$("#c21").animate({left: "-200%"}, 0);
			a = -150;
		}
		var aa = a+'%';
		$("#c21").animate({left: aa}, 2000);
		document.getElementById('c2_fake').innerHTML = a;
	}
}
function pic_r() {
	var a = document.getElementById('c2_fake').innerHTML;
	var ab = document.getElementById('c21').style.left;
	if (a+"%" == ab) {
		if (a != '-200') {
			a -= 50;
		}
		else {
			$("#c21").animate({left: "0%"}, 0);
			a = -50;
		}
		var aa = a+'%';
		$("#c21").animate({left: aa}, 2000);
		document.getElementById('c2_fake').innerHTML = a;
	}
}
function to_where(aa) {
	$('html, body').animate({scrollTop: aa}, 1000);
}

$(window).scroll(function() {
	if ( $(this).scrollTop() > 800 ){
		$('#to_top').fadeIn(100);
	}
	else {
		$('#to_top').fadeOut(100);
	}
});
window.onload =function() {
	$('#to_top').fadeOut(2000);
	document.getElementById('c21').style.left = "0%";
}