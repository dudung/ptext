---
layout: post
author: viridi
title: pTtext 1st plot
mathjax: true
ptext: true;
---
An example of using pText first version plot.

It is still a pure JavaScript version which uses pairs of ``<script>`` and ``</script>``. Suppose that there is data

<code>
x 000, 000, 020, 020, 040, 040, 060, 060, 080, 080, 090, 090, 100, 100, 110, 110, 120, 120, 130, 130, 140, 140, 150, 150, 160, 160, 170, 170, 180, 180, 190, 190, 200, 200, <br />
y 000, 000, 100, 100, 000, 000, 100, 100, 000, 000, 100, 100, 000, 000, 100, 100, 000, 000, 100, 100, 000, 000, 100, 100, 000, 000, 100, 100, 000, 000, 100, 100, 000, 000,
</code>



<ptext>
{ // xy-chart
	label: "graph-points",
	caption: "Graph with points",
	background: "#fafffa",
	width: 200,
	height: 100,
	data: {
		x: [001, 001, 020, 020, 040, 040, 060, 060, 080, 080, 100, 100, 110, 110, 120, 120, 130, 130, 140, 140, 150, 150, 160, 160, 170, 170, 180, 180, 190, 190, 199, 199,],
		y: [000, 100, 100, 000, 000, 100, 100, 020, 020, 100, 100, 000, 000, 100, 100, 000, 000, 100, 100, 000, 000, 100, 100, 000, 000, 100, 100, 000, 000, 100, 100, 000,],
	},
	type : "line",
	color: {
		line: "#f00",
		point: "#0e0",
	},
}
</ptext>

