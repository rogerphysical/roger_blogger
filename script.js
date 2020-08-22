var stars_id = 0;
var talk_id = 0;
var talk_id2 = 0;

window.onload = function() {
	auto_talk();
	// star_sky();
}
// 測試效率
// console.time("test");
// console.timeEnd("test");

// RWD
window.onresize = function(){
	if ($(window).width() > 1024) {
		document.getElementById('cont_main_l_items').style.display = "block";
	}
	else {
		document.getElementById('cont_main_l_items').style.display = "none";
	}
}
function open_index(th) {
	if (document.getElementById('cont_main_l_items').style.display === "block") {
		$('#cont_main_l_items').slideUp(400);
	}
	else {
		$('#cont_main_l_items').slideDown(400);
	}
}

// 網頁快捷鍵
function key_point(ev) {
	switch (ev.keyCode) {
		case 38:
			var count = $(".c_item").length-1;
			var min_count = -1;

			var win_top = $(window).scrollTop();
			var target = $(".c_item:eq("+count+")").offset().top;
			// 誤差
			while (count > min_count && target >= win_top-10) {
				count -= 1;
				target = count === -1?0:$(".c_item:eq("+count+")").offset().top;
			}
			$('html, body').animate({scrollTop: target}, 200);
			break;

		case 40:
			var count = 0;
			var max_count = $(".c_item").length;

			var win_top = $(window).scrollTop();
			var target = $(".c_item:eq(0)").offset().top;
			// 誤差
			while (count < max_count && target <= win_top+10) {
				count += 1;
				target = count === max_count?$('body').height()-$(window).height():$(".c_item:eq("+count+")").offset().top;
			}
			$('html, body').animate({scrollTop: target}, 200);
			// console.log(target);
			// console.log($(window).scrollTop());
			break;
	}
	// console.log(ev.keyCode);
}

// 自動對話
function auto_talk() {
	auto_talk3();
	talk_id = setInterval(()=> auto_talk2(), 10000);
	// console.log(talk_id);
}
function auto_talk2() {
	var talk_cont = [
	"我討厭烏雲在我眼前亂飄...",
	"星星為什麼會一閃一閃的?",
	"你看過哪些天上的星座呢?",
	"缺了一塊的那顆心總是努力奔馳著~~",
	"麻雀有時也能變鳳凰!",
	"天將降大任於鳳凰也",
	"天空為什麼是藍色的?",
	"海什麼時候才能填滿阿!",
	"鮮紅勳章啣到一半就不知滾到哪了...",
	"飛上枝頭打個捆~~",
	"我去過的星座比繪本裡的黑白頁還多!"
	];
	var text = talk_cont[parseInt(Math.random()*talk_cont.length)];
	document.getElementById('tool2').innerHTML = text;
}
// 對應時間的對話
function auto_talk3() {
	var new_time = new Date().getHours();

	if (new_time >= 5 && new_time < 11) {
		var text = parseInt(Math.random()*2) === 0?"早起是有什麼可以吃!":"五更雞已鳴，是要醒還是要睡了?";
	}
	else if (new_time >= 11 && new_time < 17) {
		var text = parseInt(Math.random()*2) === 0?"午餐必須吃，鳳凰如是說。":"今天的日頭真的是~~";
	}
	else if (new_time >= 17 && new_time < 23) {
		var text = parseInt(Math.random()*2) === 0?"晚餐吃了沒?":"要休息了嗎?還是再加把勁~~";
	}
	else {
		var text = parseInt(Math.random()*2) === 0?"嘿!睡不著阿~吃..聊個天?":"三更已過，還醒著嗎?";
	}

	document.getElementById('tool2').innerHTML = text;
}

// 單句對話
function one_talk(str) {
	document.getElementById('tool2').innerHTML = str;

	clearInterval(talk_id);
	clearTimeout(talk_id2);
	talk_id2 = setTimeout(()=> auto_talk(), 10000);
}

// 工具開關
function show_tools() {
	document.getElementById('tool11').style.display = 'block';
	document.getElementById('tool12_2').style.display = 'block';
}
function close_tools() {
	document.getElementById('tool11').style.display = 'none';
	document.getElementById('tool12_2').style.display = 'none';
}

// 前往彼端
function to_where() {
	const pos = $(window).scrollTop();

	if ($(window).height()-160 < pos) {
		// 更改圖片位置
		const width = ($(window).width()-400-200)/2;
		var pic_pos = document.getElementById('cont_top_pic').style.left;
		pic_pos = parseInt(pic_pos.substring(0, pic_pos.length-2));

		if (pic_pos > width) {
			var left = parseInt(Math.random()*width);
		}
		else {
			var left = width+parseInt(Math.random()*width);
		}
		
		document.getElementById('cont_top_pic').style.left = left+"px";

		// 移至最上
		$('html, body').animate({scrollTop: 0}, 200);
	}
	else {
		// 移至最下
		$('html, body').animate({scrollTop: $('body').height()-$(window).height()}, 200);
	}
}

// 滾球切換
function ball_other(th) {
	$('#running').removeClass('running');
	$('#running').addClass('running_other');
	th.onclick = ()=> ball_other2(th);
}
function ball_other2(th) {
	$('#running').removeClass('running_other');
	th.onclick = ()=> ball_other3(th);
}
function ball_other3(th) {
	$('#running').addClass('running');
	th.onclick = ()=> ball_other(th);
}

// 觀測星空
function star_sky() {
	if (stars_id === 0) {
		star_shine();
		stars_id = setInterval(()=> star_shine(), 10000);
		// console.log(stars_id);

		one_talk("怎麼有東西若隱若現?!");
	}
	else {
		clearInterval(stars_id);
		stars_id = 0;

		one_talk("平靜如故~~~~");
	}
}
// 星光閃爍
function star_shine() {
	var stars = document.getElementById('stars');
	stars.style.opacity = 0.4;
	setTimeout(()=> stars.style.opacity = 1, 5000);
}

// 對話
function to_talk() {
	document.getElementById('tool11_main').style.display = "none";
	document.getElementById('tool11_item').style.display = "block";
	document.getElementById('tool11_item_ok').focus();
}
function talking2(ev) {
	if (ev.keyCode === 13) {
		talking();
	}
	// console.log(ev.keyCode);
}
function talking() {
	document.getElementById('tool11_item').style.display = "none";
	document.getElementById('tool11_main').style.display = "block";
	var tool11_item2_ok = document.getElementById('tool11_item_ok');
	const text = tool11_item2_ok.value;
	tool11_item2_ok.value = "";

	if (text.length < 20) {
		switch (text) {
			case "":
				var text2 = "吱..說點話吧....喳..喳....";
				break;
			case "目標":
			case "任務":
				var text2 = "提高lab性能";
				break;
			// case "伊布":
			// 	document.getElementById('cont_top_img').src = "files/animal1.png";
			// 	document.getElementById('cont_top_pic').style.top = "-234px";
			// 	var text2 = "伊~~~~";
			// 	break;
			// case "貓":
			// 	document.getElementById('cont_top_img').src = "files/animal2.png";
			// 	document.getElementById('cont_top_pic').style.top = "-180px";
			// 	var text2 = "喵~~~~";
			// 	break;
			// case "鯊魚":
			// 	document.getElementById('cont_top_img').src = "files/animal3.png";
			// 	document.getElementById('cont_top_pic').style.top = "-200px";
			// 	var text2 = "沙~~~~";
			// 	break;

			default:
				var text2 = "吱.."+text+"..喳..";
		}
	}
	else {
		var text2 = text.substring(0, 2)+"..!@#$.吱.%^&*..過多..請..重..重新....";
	}

	one_talk(text2);
}

// 關鍵觸發
function lab_change() {
	document.getElementById('bird').src = "files/bird2.png";
	document.getElementById('bird_2').src = "files/bird_f2.png";
	document.getElementById('radies').src = "files/radies2.png";

	document.getElementById('cont_top_img').src = "files/lion.png";
	document.getElementById('cont_top_pic').style.top = "-140px";

	document.getElementById('music').play();

	one_talk("現在的我，如同狼人見到滿月，超人見到電話亭一樣!");
}

// 正確位置
function lab_change_tips() {
	document.getElementById('tool12').style.cursor = "unset";
	document.getElementById('star_space').style.backgroundImage = "url(files/point.png)";
}

// star 放入正確位置
function dragstart(ev) {
	ev.dataTransfer.setData("text/plain", ev.target.id);
	ev.dropEffect = "move";
}
function dragover(ev) {
	ev.preventDefault();
	ev.dataTransfer.dropEffect = "move";
}
function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	var choise = document.getElementById(data);
	ev.target.appendChild(choise);

	// 未知原因(清除函數)(不用了)
	// console.log(choise);
	// choise.ondragstart = ()=> {};
	// choise.draggable = "false";
	// console.log(choise);

	lab_change();
}