function c2_ok() {
	var x = parseInt(document.getElementById('c2_x').value);
	var y = parseInt(document.getElementById('c2_y').value);
	var z = parseInt(document.getElementById('c2_z').value);
	var check = document.getElementById('c2_check').checked;
	if (x > y || z < 1) {
		alert("範圍輸入錯誤");
	}
	else {
		document.getElementById('c2_x').disabled = true;
		document.getElementById('c2_y').disabled = true;
		document.getElementById('c2_z').disabled = true;
		document.getElementById('c2_check').disabled = true;
		document.getElementById('c2_ok').style.display = "none";
		document.getElementById('c2_go').style.display = "block";
		document.getElementById('c2_reset').style.display = "block";
	}
	
}
function c2_reset() {
	var judge = confirm("將刪除抽取紀錄\r是否繼續?");
	if (judge === true) {
		document.getElementById('c2_x').disabled = false;
		document.getElementById('c2_y').disabled = false;
		document.getElementById('c2_z').disabled = false;
		document.getElementById('c2_check').disabled = false;
		document.getElementById('c2_ok').style.display = "block";
		document.getElementById('c2_go').style.display = "none";
		document.getElementById('c2_reset').style.display = "none";
		document.getElementById('c2_result').innerHTML = "";
		document.getElementById('c2_record').innerHTML = "";
	}
	
}
function c2_start() {
	var x = parseInt(document.getElementById('c2_x').value);
	var y = parseInt(document.getElementById('c2_y').value);
	var z = parseInt(document.getElementById('c2_z').value);
	var check = document.getElementById('c2_check').checked;
	document.getElementById('c2_record').innerHTML += document.getElementById('c2_result').innerHTML;
	document.getElementById('c2_result').innerHTML = "";

	var c2_record = document.getElementById('c2_record').children;
	var range = y-x+1;

	if (check === false && range < z) {
		alert("抽取數量過多");
		return false;
	}
	else if (check === true && range < z+c2_record.length) {
		alert("抽取數量過多");
		return false;
	}
	else {
		var record = [];
		if (check === true) {
			for (var i = 0; i < c2_record.length; i++) {
				record.push(parseInt(c2_record[i].innerHTML));
			}
		}

		var c2_result = "";
		var time = 0;
		while (time < z) {
			var ran = parseInt(Math.random()*(range))+x;
			if (!(record.includes(ran))) {
				record.push(ran);
				c2_result += "<div>"+ran+"</div>";
				time ++;
			}
		}

		document.getElementById('c2_result').innerHTML = c2_result;
		return true;
	}
}