function co_ok() {
	var x = document.getElementById('co_x').value
	var y = document.getElementById('co_y').value
	var z = document.getElementById('co_z').value
	if (x === '' || y === '' || z === '') {
		alert("範圍輸入錯誤");
		return false;
	}

	x = parseInt(x);
	y = parseInt(y);
	z = parseInt(z);
	var check = document.getElementById('co_check').checked;
	if (x > y || z < 1) {
		alert("範圍輸入錯誤");
		return false;
	}
	document.getElementById('co_x').disabled = true;
	document.getElementById('co_y').disabled = true;
	document.getElementById('co_z').disabled = true;
	document.getElementById('co_check').disabled = true;
	document.getElementById('co_ok').style.display = "none";
	document.getElementById('co_go').style.display = "block";
	document.getElementById('co_reset').style.display = "block";
}
function co_reset() {
	var judge = confirm("將刪除抽取紀錄\r是否繼續?");
	if (judge === true) {
		document.getElementById('co_x').disabled = false;
		document.getElementById('co_y').disabled = false;
		document.getElementById('co_z').disabled = false;
		document.getElementById('co_check').disabled = false;
		document.getElementById('co_ok').style.display = "block";
		document.getElementById('co_go').style.display = "none";
		document.getElementById('co_reset').style.display = "none";
		document.getElementById('co_result').innerHTML = "";
		document.getElementById('co_record').innerHTML = "";
	}
	
}
function co_start() {
	var x = parseInt(document.getElementById('co_x').value);
	var y = parseInt(document.getElementById('co_y').value);
	var z = parseInt(document.getElementById('co_z').value);
	var check = document.getElementById('co_check').checked;
	document.getElementById('co_record').innerHTML += document.getElementById('co_result').innerHTML;
	document.getElementById('co_result').innerHTML = "";

	var co_record = document.getElementById('co_record').children;
	var range = y-x+1;

	if (check === false && range < z) {
		alert("抽取數量過多");
		return false;
	}
	else if (check === true && range < z+co_record.length) {
		alert("抽取數量過多");
		return false;
	}
	else {
		var record = [];
		if (check === true) {
			for (var i = 0; i < co_record.length; i++) {
				record.push(parseInt(co_record[i].innerHTML));
			}
		}

		var co_result = "";
		var time = 0;
		while (time < z) {
			var ran = parseInt(Math.random()*(range))+x;
			if (!(record.includes(ran))) {
				record.push(ran);
				co_result += "<div>"+ran+"</div>";
				time ++;
			}
		}

		document.getElementById('co_result').innerHTML = co_result;
		return true;
	}
}