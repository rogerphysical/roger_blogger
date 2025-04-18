function write_cont_0(path_relation) {
	document.write(`
		<title>Roger的實驗洪流</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<link rel="icon" type="image/x-icon" href="` + path_relation + `files_basic/magic_square_1.ico">
		<link rel="stylesheet" type="text/css" href="` + path_relation + `style.css">
		<link rel="stylesheet" type="text/css" href="` + path_relation + `style_cont.css">
		<script type="text/javascript" src="` + path_relation + `script.js"></script>
		
	</head>
	<body onkeydown="key_point(event)">
		<div id="stars">
			<div id="star_space" class="star" style="left: 33%; top: 78%; background-image: unset;" ondragover="dragover(event)" ondrop="drop(event)"></div>
		</div>
		
		<div id="cont">
			<div id="music_cont">
				<audio id="music" controls loop src="` + path_relation + `files_basic/music.mp3"></audio>
			</div>

			<div id="cont_top_pic" class="cont_top_pic"></div>

			<div id="cont_main">
				<div class="cont_main_l">
					<div id="cont_main_l_img">
						<a href="` + path_relation + `index.html">
							<img id="cont_main_l_img1" src="` + path_relation + `files_basic/magic_square_0.png"  onmouseenter="img_change()">
							<img id="cont_main_l_img2" src="` + path_relation + `files_basic/magic_square_1.png"  onmouseleave="img_change2()">
						</a>
					</div>

					<div id="cont_main_l_phone_index" onclick="open_index(this)">目錄</div>
					<div id="cont_main_l_items">
						<a href="` + path_relation + `index.html"><div class="cont_main_l_item">Roger的實驗洪流</div></a>
						<a href="` + path_relation + `index1.html"><div class="cont_main_l_item">各種機器</div></a>
						<a href="` + path_relation + `index2.html"><div class="cont_main_l_item">展示櫥窗</div></a>
						<a href="` + path_relation + `index4.html"><div class="cont_main_l_item">其他</div></a>
						<a href="` + path_relation + `index0.html"><div class="cont_main_l_item">關於本lab的某些事</div></a>
					</div>
				</div>
				<div id="cont_main_r">
	`);
}


