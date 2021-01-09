var index = 0;
var item = [];
var total = 0;
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
		return false
	}
	else {
		var co_main = "<div class=co_i_i>";
		co_main += "<div class=co_i_i1>"+co_i_t1+"</div>";
		co_main += "<div class=co_i_i2>"+co_i_t2+"</div>";
		co_main += "<input class=co_i_i3 type=button value=&times; onclick=co_clear(this)>";
		co_main += "</div>";
		document.getElementById('co_main').innerHTML += co_main;
		
		document.getElementById('co_i_t1').select();
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

	// 填放項目與加總
	var co_i_i2 = document.getElementsByClassName('co_i_i2');
	for (var i = 1; i < co_i_i2.length; i++) {
		var value = parseFloat(co_i_i2[i].innerHTML);
		item.push(value);
		total += value;
	}
	$('html, body').animate({scrollTop: $(".c_i_center:eq(2)").offset().top}, 200);
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

	document.getElementById('co_result').innerHTML = "";
	document.getElementById('co_record').innerHTML = "";

	index = 0;
	item = [];
	total = 0;
}
function co_start() {
	document.getElementById('co_record').innerHTML += document.getElementById('co_result').innerHTML;
	document.getElementById('co_result').innerHTML = "";
	var z = parseInt(document.getElementById('co_z').value);

	if (total !== 0) {
		var co_result = "";
		var times = 0;
		while (times < z) {
			var pos = 0;
			var total2 = item[0];
			var ran = Math.random()*total;
			while (total2 < ran) {
				pos ++;
				total2 += item[pos];
			}
			// 第0項是標題
			co_result += "<div>"+document.getElementsByClassName('co_i_i1')[pos+1].innerHTML+"</div>";
			times ++;
		}
		index ++;
		document.getElementById('co_result').innerHTML = "<div>----第"+index+"抽----</div>";
		document.getElementById('co_result').innerHTML += co_result;
	}
}