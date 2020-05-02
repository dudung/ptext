/*
	ptext.js
	Parse ptext block
	
	Sparisoma Viridi | https://github.com/dudung
	
	
	20200503
	0637 Move from _posts to asset/js as recommended [1].
	
	References
	1. https://talk.jekyllrb.com/t
	   /add-custom-javascript-to-a-jekyll-page/789/2 [20200503]
*/
var tagBeg = "<!--ptext";
var tagEnd = "!ptext-->";
var graphNum = 0;

window.onload = parse3;


// Put a div
function parse3() {
	var lines = document.body.innerHTML.split("\n");
	var N = lines.length;
	var section = [];
	var newLines = [];
	var inSection = false;
	for(var i = 0; i < N; i++) {
		if(lines[i] == tagEnd) {
			inSection = !inSection;
		}

		if(inSection) {
			section.push(lines[i]);
		} else {
			newLines.push(lines[i]);
		}
		
		if(lines[i] == tagBeg) {
			inSection = !inSection;
		}
	}
	
	N = newLines.length;
	for(var i = 0; i < N; i++) {
		if(newLines[i] == tagBeg) {
			newLines[i] = "<div " +
				"id='graph" + (graphNum++) + "'" +
				">";
		}
		if(newLines[i] == tagEnd) {
			newLines[i] = "</div>";
		}
	}
	newLines = newLines.join("\n");
	document.body.innerHTML = newLines;
	
	var str = section.join("\n");
	chart = eval("(" + str + ")");
	
	for(var i = 0; i < graphNum; i++) {
		vis("graph" + i, chart);
	}
}



// Substitute only but does not work
function parse2() {
	var lines = document.body.innerHTML.split("\n");
	var N = lines.length;
	var section = [];
	for(var i = 0; i < N; i++) {
		if(lines[i] == tagBeg) {
			lines[i] = "&lt;script&gt;\nc =";
		}

		if(lines[i] == tagEnd) {
			lines[i] = "vis(c);\n&lt;/script&gt;";
		}
	}
	lines = lines.join("\n");
	document.body.innerHTML = lines;
}


// Parse but the drawing is in the back
function parse1() {
	var lines = document.body.innerHTML.split("\n");
	var N = lines.length;
	var section = [];
	var inSection = false;
	var pos = -1;
	for(var i = 0; i < N; i++) {
		if(lines[i] == tagEnd) {
			inSection = !inSection;
		}

		if(inSection) {
			section.push(lines[i]);
		}
		
		if(lines[i] == tagBeg) {
			inSection = !inSection;
		}
	}
	
	var str = section.join("\n");
	var chart = eval("(" + str + ")");
	vis(chart);
}

function vis() {
	var id = arguments[0];
	var arg = arguments[1];
	var x = arg.data.x;
	var y = arg.data.y;
	var N = Math.min(x.length, y.length);
	
	var type = arg.type;
	
	var div = document.getElementById(id);
	div.style.textAlign = "center";

	var can = document.createElement("canvas");
	can.width = "300";
	can.height = "150";
	can.style.width = can.width + "px";
	can.style.height = can.height + "px";
	can.style.background = arg.background;

	//document.body.append(div);
	div.append(can);
	
	var lc = arg.color.line;
	var pc = arg.color.point;
	
	var cx = can.getContext("2d");
	if(type == "line") {
		cx.strokeStyle = lc;
		cx.beginPath();
		for(var i = 0; i < N; i++) {
			if(i == 0) {
				cx.moveTo(x[i], y[i]);
			} else {
				cx.lineTo(x[i], y[i]);
			}
		}
		cx.stroke();
	} else if(type == "point") {
		cx.fillStyle = pc;
		for(var i = 0; i < N; i++) {
			cx.beginPath();
			cx.arc(x[i], y[i], 4, 0, 2 * Math.PI);
			cx.fill();
		}
	} else if(type == "line-point") {
		cx.strokeStyle = lc;
		cx.beginPath();
		for(var i = 0; i < N; i++) {
			if(i == 0) {
				cx.moveTo(x[i], y[i]);
			} else {
				cx.lineTo(x[i], y[i]);
			}
		}
		cx.stroke();
		cx.fillStyle = pc;
		for(var i = 0; i < N; i++) {
			cx.beginPath();
			cx.arc(x[i], y[i], 4, 0, 2 * Math.PI);
			cx.fill();
		}
	}
}
