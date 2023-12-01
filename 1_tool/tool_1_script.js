function co_use(use) {
	switch(use) {
		case "AC":
			document.getElementById('co_tt1').innerHTML = "";
			document.getElementById('co_tt2').innerHTML = "";
			document.getElementById('co_tt3').innerHTML = "";
			break;
		case "C":
			document.getElementById('co_tt3').innerHTML = "";
			break;
		case "CE":
			var co_tt3 = document.getElementById('co_tt3').innerHTML;
			var co_tt3_new = "";
			for (var i = 0; i < co_tt3.length-1; i++) {
				co_tt3_new += co_tt3[i];
			}
			document.getElementById('co_tt3').innerHTML = co_tt3_new;
			break;
		case "±":
			var co_tt3 = document.getElementById('co_tt3').innerHTML;
			if (co_tt3 !== "") {
				var value = parseFloat(document.getElementById('co_tt3').innerHTML);
				document.getElementById('co_tt3').innerHTML = 0-value;
			}
			break;

		case "+":
		case "-":
		case "×":
		case "÷":
			var co_tt1 = document.getElementById('co_tt1').innerHTML;
			var co_tt3 = document.getElementById('co_tt3').innerHTML;
			if (co_tt1 !== "" && co_tt3 !== "") {
				document.getElementById('co_tt1').innerHTML = co_use("=");
				document.getElementById('co_tt2').innerHTML = use;
				document.getElementById('co_tt3').innerHTML = "";
			}
			else if (co_tt1 === "" && co_tt3 !== "") {
				document.getElementById('co_tt1').innerHTML = co_tt3;
				document.getElementById('co_tt3').innerHTML = "";
				document.getElementById('co_tt2').innerHTML = use;
			}
			else if (co_tt1 !== "" && co_tt3 === "") {
				document.getElementById('co_tt2').innerHTML = use;
			}
			break;

		case "=":
			var co_tt1 = document.getElementById('co_tt1').innerHTML;
			var co_tt2 = document.getElementById('co_tt2').innerHTML;
			var co_tt3 = document.getElementById('co_tt3').innerHTML;
			if (co_tt1 !== "" && co_tt2 !== "" && co_tt3 !== "") {
				//解決浮點數誤差(換成整數)
				const co_tt1_l = (co_tt1.split('.')[1] || "").length;
				const co_tt3_l = (co_tt3.split('.')[1] || "").length;
				const co_t_op = Math.pow(10, Math.max(co_tt1_l, co_tt3_l));
				switch(co_tt2) {
					case "+":
						var total = parseInt(co_tt1*co_t_op+co_tt3*co_t_op)/co_t_op;
						break;
					case "-":
						var total = parseInt(co_tt1*co_t_op-co_tt3*co_t_op)/co_t_op;
						break;
					case "×":
						const co_tt1_op2 = Math.pow(10, co_tt1_l);
						const co_tt3_op2 = Math.pow(10, co_tt3_l);
						const co_t_op2 = Math.pow(10, co_tt1_l+co_tt3_l);
						var total = parseInt((co_tt1*co_tt1_op2)*(co_tt3*co_tt3_op2))/co_t_op2;
						break;
					case "÷":
						var total = (parseInt(co_tt1*co_t_op)/parseInt(co_tt3*co_t_op));
						break;
				}
				document.getElementById('co_tt1').innerHTML = "";
				document.getElementById('co_tt2').innerHTML = "";
				document.getElementById('co_tt3').innerHTML = total;
				return total;
			}
			break;
	}
}
function co_num(num) {
	var co_tt3 = document.getElementById('co_tt3').innerHTML;
	//接受長度
	if (co_tt3.length < 16) {
		if (num === ".") {
			var judge = 0;
			for (var i = 0; i < co_tt3.length; i++) {
				if (co_tt3[i] === ".") {
					judge = 1;
				}
			}
			if (judge === 0) {
				document.getElementById('co_tt3').innerHTML += num;
			}
		}
		else {
			document.getElementById('co_tt3').innerHTML += num;
		}
	}
}
function co_save() {
	var co_save = document.getElementById('co_save');
	var co_tt3 = document.getElementById('co_tt3').innerHTML;
	if (co_save.children.length < 10 && co_tt3 !== "") {
		var cont = "<div>";
		cont += "<div class='co_item co_save_num' onclick=co_show(this.innerHTML)>";
		cont += co_tt3;
		cont += "</div>";
		cont += "<div class='co_item co_red' style='width: 44px;' onclick=co_clear2(this)>";
		cont += "&times;</div>";
		cont += "</div>";
		co_save.innerHTML += cont;
	}
	else if (co_save.children.length >= 10) {
		alert("儲存過多!");
	}
}
function co_clear() {
	var judge = confirm("確定全部清除?");
	if (judge === true) {
		document.getElementById('co_save').innerHTML = "";
	}
}
function co_show(th_num) {
	document.getElementById('co_tt3').innerHTML = th_num;
}
function co_clear2(th) {
	th.parentNode.parentNode.removeChild(th.parentNode);
}