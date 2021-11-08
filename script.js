function to_page(page1, page2) {
	$(page1).animate({left: "-100%"}, 600);
	$(page2).animate({left: "0%"}, 600);
}
function to_page_l(page1, page2) {
	$(page1).animate({left: "100%"}, 600);
	$(page2).animate({left: "0%"}, 600);
}
function close1() {
	var judge = confirm("此動作將清空所有本端localStorage\r確定清除嗎?");
	if (judge === true) {
		localStorage.clear();
	}
	
}
function tips(id, str) {
	document.getElementById(id).innerHTML = str;
}

function show_copyright() {
	$('#footer').animate({left: -24}, 600);
	var new_left = -1*$('#footer').width()-24;
	setTimeout("$('#footer').animate({left: "+new_left+"}, 600)", 1600);
}