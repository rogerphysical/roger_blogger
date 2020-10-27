function c1_use(use) {
	switch(use) {
		case "AC":
			document.getElementById('c11_t1').innerHTML = "";
			document.getElementById('c11_t2').innerHTML = "";
			document.getElementById('c11_t3').innerHTML = "";
			break;
		case "C":
			document.getElementById('c11_t3').innerHTML = "";
			break;
		case "CE":
			var c11_t3 = document.getElementById('c11_t3').innerHTML;
			var c11_t3_new = "";
			for (var i = 0; i < c11_t3.length-1; i++) {
				c11_t3_new += c11_t3[i];
			}
			document.getElementById('c11_t3').innerHTML = c11_t3_new;
			break;
		case "±":
			var c11_t3 = document.getElementById('c11_t3').innerHTML;
			if (c11_t3 !== "") {
				var value = parseFloat(document.getElementById('c11_t3').innerHTML);
				document.getElementById('c11_t3').innerHTML = 0-value;
			}
			break;

		case "+":
		case "-":
		case "×":
		case "÷":
			var c11_t1 = document.getElementById('c11_t1').innerHTML;
			var c11_t3 = document.getElementById('c11_t3').innerHTML;
			if (c11_t1 !== "" && c11_t3 !== "") {
				document.getElementById('c11_t1').innerHTML = c1_use("=");
				document.getElementById('c11_t2').innerHTML = use;
				document.getElementById('c11_t3').innerHTML = "";
			}
			else if (c11_t1 === "" && c11_t3 !== "") {
				document.getElementById('c11_t1').innerHTML = c11_t3;
				document.getElementById('c11_t3').innerHTML = "";
				document.getElementById('c11_t2').innerHTML = use;
			}
			else if (c11_t1 !== "" && c11_t3 === "") {
				document.getElementById('c11_t2').innerHTML = use;
			}
			break;

		case "=":
			var c11_t1 = document.getElementById('c11_t1').innerHTML;
			var c11_t2 = document.getElementById('c11_t2').innerHTML;
			var c11_t3 = document.getElementById('c11_t3').innerHTML;
			if (c11_t1 !== "" && c11_t2 !== "" && c11_t3 !== "") {
				//解決浮點數誤差(換成整數)
				const c11_t1_l = (c11_t1.split('.')[1] || "").length;
				const c11_t3_l = (c11_t3.split('.')[1] || "").length;
				const c11_t_op = Math.pow(10, Math.max(c11_t1_l, c11_t3_l));
				switch(c11_t2) {
					case "+":
						var total = parseInt(c11_t1*c11_t_op+c11_t3*c11_t_op)/c11_t_op;
						break;
					case "-":
						var total = parseInt(c11_t1*c11_t_op-c11_t3*c11_t_op)/c11_t_op;
						break;
					case "×":
						const c11_t1_op2 = Math.pow(10, c11_t1_l);
						const c11_t3_op2 = Math.pow(10, c11_t3_l);
						const c11_t_op2 = Math.pow(10, c11_t1_l+c11_t3_l);
						var total = parseInt((c11_t1*c11_t1_op2)*(c11_t3*c11_t3_op2))/c11_t_op2;
						break;
					case "÷":
						var total = (parseInt(c11_t1*c11_t_op)/parseInt(c11_t3*c11_t_op));
						break;
				}
				document.getElementById('c11_t1').innerHTML = "";
				document.getElementById('c11_t2').innerHTML = "";
				document.getElementById('c11_t3').innerHTML = total;
				return total;
			}
			break;
	}
}
function c1_num(num) {
	var c11_t3 = document.getElementById('c11_t3').innerHTML;
	//接受長度
	if (c11_t3.length < 16) {
		if (num === ".") {
			var judge = 0;
			for (var i = 0; i < c11_t3.length; i++) {
				if (c11_t3[i] === ".") {
					judge = 1;
				}
			}
			if (judge === 0) {
				document.getElementById('c11_t3').innerHTML += num;
			}
		}
		else {
			document.getElementById('c11_t3').innerHTML += num;
		}
	}
}
function c1_save() {
	var c12_i = document.getElementById('c12_i');
	var c11_t3 = document.getElementById('c11_t3').innerHTML;
	if (c12_i.children.length < 10 && c11_t3 !== "") {
		var cont = "<div class=c12_item>";
		cont += "<div class=c12_i1 onclick=c1_show(this.innerHTML)>";
		cont += c11_t3;
		cont += "</div>";
		cont += "<div class=c12_i2 onclick=c1_clear2(this)>&times;</div></div>";
		cont += "</div>";
		c12_i.innerHTML += cont;
	}
	else if (c12_i.children.length >= 10) {
		alert("儲存過多!");
	}
}
function c1_clear() {
	var judge = confirm("確定全部清除?");
	if (judge === true) {
		document.getElementById('c12_i').innerHTML = "";
	}
}
function c1_show(th_num) {
	document.getElementById('c11_t3').innerHTML = th_num;
}
function c1_clear2(th) {
	th.parentNode.parentNode.removeChild(th.parentNode);
}