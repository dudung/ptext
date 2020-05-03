/*
	ptext.js
	Parse ptext block
	
	Sparisoma Viridi | https://github.com/dudung
	
	20200503
	0637 Move from _posts to asset/js as recommended [1].
	0703 Rename parse3 to ptParseGraphs.
	0709 When changing body content it affect MathJax numbering.
	0742 Try with tags <ptext></ptext>
	0803 Fix it with getElementsByTagName, not body.innerHTML.
	0805 Add label and try to implement HTML anchor.
	0831 Put HTML anchor before graph for better view when refered.
	0859 Finish show numbering and testing form multiple refererrer.
	0910 Tested for multiple referrer and all work.
	
	
	References
	1. https://talk.jekyllrb.com/t
	   /add-custom-javascript-to-a-jekyll-page/789/2 [20200503]
*/


//var ptBeg = "<!--ptext";
//var ptEnd = "!ptext-->";
//var ptGraphNum = 0;
var prefix = "graph";
var ptGraphs = [];

window.onload = function() {
	ptGetParameters();
	ptCreateElements();
	ptCreateReferrers();
	
	ptGetMarks();
};


// Try to get some marks
function ptGetMarks() {
	content = document.body.innerHTML;
	//var b = content.find("\ptref{");
	//console.log(b);
	//document.body.innerHTML = document.body.innerHTML.replace("\ptref{", "xxx");
	var beg = content.search("\ptref{");
	var end = content.indexOf("}", beg);
	console.log(beg, end);
}


// Create referrers
function ptCreateReferrers() {
	var els = document.getElementsByTagName("ptref");
	
	var N = els.length;
	for(var i = 0; i < N; i++) {
		var s = els[i].innerHTML;
		
		var el = ptGraphs.find(option => option.label === s);
		
		var num = el.idx + 1;
		els[i].innerHTML = "<a href='#" + s
			+ "' style='font-weight: bold;'>"
			+ num + "</a>";
	}
}


// Create elements of pText graph
function ptCreateElements() {
	var N = ptGraphs.length;
	for(var i = 0; i < N; i++) {
		vis(prefix + i, ptGraphs[i]);
	}
}


// function get parameters between ptext tags, not nice but works
function ptGetParameters() {
	var els = document.getElementsByTagName("ptext");
	
	for(var i = 0; i < els.length; i++) {
		var obj = eval("(" + els[i].innerHTML + ")");
		obj.idx = i;
		ptGraphs.push(obj);
		els[i].innerHTML = "";
		var div = document.createElement("div");
		div.id = prefix + i;
		els[i].append(div);
	}	
}


// Visualize a graph from information between ptext tags
function vis() {
	var id = arguments[0];
	var arg = arguments[1];
	var x = arg.data.x;
	var y = arg.data.y;
	var N = Math.min(x.length, y.length);
	
	var type = arg.type;
	
	var div = document.getElementById(id);
	div.style.textAlign = "center";
	
	var ref = document.createElement("div");
	ref.innerHTML = "<a name = '" + arg.label + "'></a>";
	var cap = document.createElement("div");
	cap.innerHTML = "Figure " + (arg.idx + 1)
		+ " " + arg.caption;
	cap.style.paddingTop = "0.25em";

	var can = document.createElement("canvas");
	can.width = arg.width
	can.height = arg.height;
	can.style.width = can.width + "px";
	can.style.height = can.height + "px";
	can.style.background = arg.background;

	//document.body.append(div);
	div.append(ref);
	div.append(can);
	div.append(cap);
	
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


// Put a div
function ptParseGraphs() {
	var content = document.body.innerHTML;
	console.log(content);
	
	var lines = content.split("\n");
	
	var N = lines.length;
	var ptSection = [];
	var newLines = [];
	var inSection = false;

	for(var i = 0; i < N; i++) {
		if(lines[i] == ptEnd) {
			inSection = !inSection;
		}
		
		if(inSection) {
			ptSection.push(lines[i]);
		} else {
			newLines.push(lines[i]);
		}
		
		if(lines[i] == ptBeg) {
			inSection = !inSection;
		}
		
		if(!inSection && lines[i] == ptEnd) {
			ptGraphNum++;
			
			var str = ptSection.join("\n");
			var g = eval("(" + str + ")");
			ptGraphs.push(g);
			
			ptSection = [];
		}
	}
	
	ptGraphNum = 0;
	N = newLines.length;
	for(var i = 0; i < N; i++) {
		if(newLines[i] == ptBeg) {
			newLines[i] = "<div " +
				"id='graph" + (ptGraphNum++) + "'" +
				">";
		}
		if(newLines[i] == ptEnd) {
			newLines[i] = "</div>";
		}
	}
	
	newLines = newLines.join("\n");
	//document.body.innerHTML = content;
	
	for(var i = 0; i < ptGraphNum; i++) {
		//vis("graph" + i, ptGraphs[i]);
	}
}


// Substitute only but does not work
function parse2() {
	var lines = document.body.innerHTML.split("\n");
	var N = lines.length;
	var section = [];
	for(var i = 0; i < N; i++) {
		if(lines[i] == ptBeg) {
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
		
		if(lines[i] == ptBeg) {
			inSection = !inSection;
		}
	}
	
	var str = section.join("\n");
	var chart = eval("(" + str + ")");
	vis(chart);
}
