var table = [[1, 70, 0], [122, 71, 2], [200, 110, 4], [300, 135, 6], 
[396, 151, 8], [596, 176, 9], [605, 177, 10], [625, 179, 11], 
[647, 181, 12], [671, 183, 13], [697, 185, 14], [725, 187, 15], 
[755, 189, 16], [787, 191, 17], [821, 193, 18], [857, 195, 19], 
[895, 197, 20], [Infinity, Infinity, Infinity]];

function to_ok(ev, num) {
	if (ev.keyCode === 13) {
		if (num === 1) {
			c4_ok();	
		}
		else if (num === 2) {
			c4_ok2();
		}
	}
}

function c4_ok() {
	const x = document.getElementById('c4_x').value;
	var y = c4_ok_loop(x, 0);
	document.getElementById('c4_sol').innerHTML = y+'等';
}
function c4_ok_loop(space, index) {
	if (space < table[index+1][1]) {
		var value = table[index];
		return value[0]+(space-value[1])*value[2]
	}
	return 	c4_ok_loop(space, index+1)
}

function c4_ok2() {
	const x = document.getElementById('c4_x2').value;
	var y = c4_ok2_loop(x, 0);
	document.getElementById('c4_sol2').innerHTML = y+'隊伍空間';
}
function c4_ok2_loop(level, index) {
	if (level < table[index+1][0]) {
		var value = table[index];
		if (value[2] === 0 ) {
			return value[1];
		}
		return value[1]+parseInt((level-value[0])/value[2])
	}
	return 	c4_ok2_loop(level, index+1)
}