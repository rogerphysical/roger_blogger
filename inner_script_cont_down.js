var down = '\
					<div class="c_item" style="height: 100px;"></div>\
				</div>\
				<div class="cont_main_l">\
					<div id="cont_main_footer">Copyright &copy; 2020 坴奉Roger</div>\
				</div>\
			</div>\
\
		</div>\
\
		<div id="running">\
			<div id="radies" class="radies"></div>\
			<div id="star_point" class="star" draggable="true" ondragstart="dragstart(event)"></div>\
		</div>\
\
		<div id="tool">\
			<div id="tool2"></div>\
			<div id="tool11" onmouseleave="close_tools()">\
				<div id="tool11_main" style="width: 100%; height: 100%;">\
					<div class="tool11_item" onclick="to_where()">前往彼端</div>\
					<div class="tool11_item" onclick="ball_other3(this)">滾球切換</div>\
					<div class="tool11_item" onclick="star_sky()">觀測星空</div>\
					<div class="tool11_item" onclick="to_talk()">與其對話</div>\
				</div>\
				<div id="tool11_item">\
					<div>你想說:</div>\
					<input id="tool11_item_ok" type="text" onkeydown="talking2(event)">\
					<input id="tool11_item_ok2" type="buttom" value="對話" onclick="talking()">\
				</div>\
			</div>\
\
			<div id="tool12_2">\
				<div id="bird_2" class="bird_2"></div>\
			</div>\
			<div id="tool12" onmouseenter="show_tools()">\
				<div id="bird" class="bird"></div>\
			</div>\
\
		</div>\
	</body>';

document.write(down);
