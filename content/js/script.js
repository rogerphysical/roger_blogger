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
// $("#to_message").click(function(){
//   $('html, body').animate({scrollTop: $('#message').offset().top}, 1000);
// }); 