function c3_clear_all() {
	var judge = confirm("確定清空項目?");
	if (judge === true) {
		document.getElementById('c3_iii').innerHTML = "";
	}
}
function c3_clear(th) {
	th.parentNode.parentNode.removeChild(th.parentNode);
}
function c3_add() {
	var c3_ii_t1 = document.getElementById('c3_ii_t1').value;
	var c3_ii_t2 = document.getElementById('c3_ii_t2').value;
	if (c3_ii_t1 === "" || c3_ii_t2 < 0) {
		alert("輸入錯誤");
	}
	else {
		var c3_iii = "<div class=c3_ii_i>";
		c3_iii += "<div class=c3_ii_i1>"+c3_ii_t1+"</div>";
		c3_iii += "<div class=c3_ii_i2>"+c3_ii_t2+"</div>";
		c3_iii += "<input class=c3_ii_i3 type=button value=&times; onclick=c3_clear(this)>";
		c3_iii += "</div>";
		document.getElementById('c3_iii').innerHTML += c3_iii;
	}
}
function c3_ok() {
	document.getElementById('c3_reset').style.display = "block";
	document.getElementById('c3_go').style.display = "block";
	document.getElementById('c3_ok').style.display = "none";
	document.getElementById('c3_ii_t1').disabled = true;
	document.getElementById('c3_ii_t2').disabled = true;
	document.getElementById('c3_ii_t3').disabled = true;
	var c3_ii_i3 = document.getElementsByClassName('c3_ii_i3');
	for (var i = 0; i < c3_ii_i3.length; i++) {
		c3_ii_i3[i].disabled = true;
	}
	// document.getElementById('c3_check').disabled = true;
}
function c3_reset() {
	document.getElementById('c3_reset').style.display = "none";
	document.getElementById('c3_go').style.display = "none";
	document.getElementById('c3_ok').style.display = "block";
	document.getElementById('c3_ii_t1').disabled = false;
	document.getElementById('c3_ii_t2').disabled = false;
	document.getElementById('c3_ii_t3').disabled = false;
	var c3_ii_i3 = document.getElementsByClassName('c3_ii_i3');
	for (var i = 0; i < c3_ii_i3.length; i++) {
		c3_ii_i3[i].disabled = false;
	}
	// document.getElementById('c3_check').disabled = false;

	document.getElementById('c3_result').innerHTML = "";
	document.getElementById('c3_record').innerHTML = "";
}
function c3_start() {
	// var check = document.getElementById('c3_check').checked;
	document.getElementById('c3_record').innerHTML += document.getElementById('c3_result').innerHTML;
	document.getElementById('c3_result').innerHTML = "";

	var c3_ii_i2 = document.getElementsByClassName('c3_ii_i2');
	var item = [];
	var total = 0;
	for (var i = 1; i < c3_ii_i2.length; i++) {
		var value = parseInt(c3_ii_i2[i].innerHTML);
		item.push(value);
		total += value;
	}

	if (total !== 0) {
		pos = 0;
		total2 = item[0];
		var ran = parseInt(Math.random()*total)+1;
		while (total2 < ran) {
			pos ++;
			total2 += item[pos];
		}

		document.getElementById('c3_result').innerHTML = "<div>"+document.getElementsByClassName('c3_ii_i1')[pos+1].innerHTML+"</div>";
	}
}