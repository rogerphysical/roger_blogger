var up = '\
	<body onkeydown="key_point(event)">\
		<div id="stars">\
			<div class="star" style="left: 80%; top: 26%;"></div>\
			<div class="star" style="left: 73%; top: 12%;"></div>\
			<div class="star" style="left: 58%; top: 26%;"></div>\
			<div class="star" style="left: 57%; top: 41%;"></div>\
			<div class="star" style="left: 34%; top: 35%;"></div>\
			<div class="star" style="left: 25%; top: 39%;"></div>\
			<div class="star" style="left: 17%; top: 69%;"></div>\
			<!-- <div class="star" style="left: 33%; top: 66%;"></div> -->\
			<div class="star" style="left: 57%; top: 71%;"></div>\
			<div class="star" style="left: 63%; top: 51%;"></div>\
			<div class="star" style="left: 81%; top: 74%;"></div>\
			<div class="star" style="left: 68%; top: 80%;"></div>\
\
			<div id="star_space" class="star" style="left: 33%; top: 66%; background-image: unset;" ondragover="dragover(event)" ondrop="drop(event)"></div>\
		</div>\
		\
		<div style="height: 1px;"></div>\
		<div id="cont">\
			<div id="music_cont">\
				<audio id="music" controls loop src="files/music.mp3"></audio>\
			</div>\
\
			<div id="cont_top_pic">\
				<a href="index0.html">\
					<img id="cont_top_img" src="files/animal.png">\
				</a>\
			</div>\
\
			<div id="cont_main">\
				<div class="cont_main_l">\
					<div id="cont_main_l_img">\
						<a href="index.html">\
							<img style="max-height: 100%; curso: pointer;" src="files/super_roger.png">\
						</a>\
					</div>\
\
					<div id="cont_main_l_phone_index" onclick="open_index(this)">目錄</div>\
					<div id="cont_main_l_items">\
						<a href="index.html"><div class="cont_main_l_item">首頁</div></a>\
						<a href="index1.html"><div class="cont_main_l_item">程式語言</div></a>\
						<a href="index2.html"><div class="cont_main_l_item">其他</div></a>\
						<a href="index0.html"><div class="cont_main_l_item">關於本lab的某些事</div></a>\
					</div>\
				</div>\
				<div id="cont_main_r">';

document.write(up);