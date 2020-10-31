function co_clear_all() {
	var judge = confirm("確定清空項目?");
	if (judge === true) {
		document.getElementById('co_main').innerHTML = "";
	}
}
function co_clear(th) {
	th.parentNode.parentNode.removeChild(th.parentNode);
}
function co_add() {
	var co_i_t1 = document.getElementById('co_i_t1').value;
	var co_i_t2 = document.getElementById('co_i_t2').value;
	if (co_i_t1 === "" || co_i_t2 < 0) {
		alert("輸入錯誤");
	}
	else {
		var co_main = "<div class=co_i_i>";
		co_main += "<div class=co_i_i1>"+co_i_t1+"</div>";
		co_main += "<div class=co_i_i2>"+co_i_t2+"</div>";
		co_main += "<input class=co_i_i3 type=button value=&times; onclick=co_clear(this)>";
		co_main += "</div>";
		document.getElementById('co_main').innerHTML += co_main;
	}
}
function co_ok() {
	document.getElementById('co_reset').style.display = "block";
	document.getElementById('co_go').style.display = "block";
	document.getElementById('co_ok').style.display = "none";
	document.getElementById('co_i_t1').disabled = true;
	document.getElementById('co_i_t2').disabled = true;
	document.getElementById('co_i_t3').disabled = true;
	var co_i_i3 = document.getElementsByClassName('co_i_i3');
	for (var i = 0; i < co_i_i3.length; i++) {
		co_i_i3[i].disabled = true;
	}
	// document.getElementById('c3_check').disabled = true;
}
function co_reset() {
	document.getElementById('co_reset').style.display = "none";
	document.getElementById('co_go').style.display = "none";
	document.getElementById('co_ok').style.display = "block";
	document.getElementById('co_i_t1').disabled = false;
	document.getElementById('co_i_t2').disabled = false;
	document.getElementById('co_i_t3').disabled = false;
	var co_i_i3 = document.getElementsByClassName('co_i_i3');
	for (var i = 0; i < co_i_i3.length; i++) {
		co_i_i3[i].disabled = false;
	}
	// document.getElementById('c3_check').disabled = false;

	document.getElementById('co_result').innerHTML = "";
	document.getElementById('co_record').innerHTML = "";
}
function co_start() {
	document.getElementById('co_record').innerHTML += document.getElementById('co_result').innerHTML;
	document.getElementById('co_result').innerHTML = "";

	var co_i_i2 = document.getElementsByClassName('co_i_i2');
	var item = [];
	var total = 0;
	for (var i = 1; i < co_i_i2.length; i++) {
		var value = parseFloat(co_i_i2[i].innerHTML);
		item.push(value);
		total += value;
	}

	if (total !== 0) {
		var pos = 0;
		total2 = item[0];
		var ran = Math.random()*total;
		while (total2 < ran) {
			pos ++;
			total2 += item[pos];
		}

		document.getElementById('co_result').innerHTML = "<div>"+document.getElementsByClassName('co_i_i1')[pos+1].innerHTML+"</div>";
	}
}