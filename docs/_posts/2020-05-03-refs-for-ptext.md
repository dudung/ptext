---
layout: post
author: user
title: Refs for pText
mathjax: true
ptext: true
---

Try to get some marks in document, such as \ptref{graph-line}.

Today we has accomplished in using MathJax and syntax highlighting using Rouge in Jekyll. And also introduction to pText in drawing a xy-chart using canvas through JavaScript.

We can have a graph of line

<ptext>
{ // xy-chart
	label: "graph-line",
	caption: "Graph with line",
	background: "#fffafa",
	width: 300,
	height: 150,
	data: {
		x: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300],
		y: [0, 65, 100, 130, 145, 150, 140, 120, 90, 50, 0],
	},
	type : "line",
	color: {
		line: "#f88",
		point: "#e00",
	},
}
</ptext>


or points

<ptext>
{ // xy-chart
	label: "graph-points",
	caption: "Graph with points",
	background: "#fafffa",
	width: 300,
	height: 150,
	data: {
		x: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300],
		y: [0, 65, 100, 130, 145, 150, 140, 120, 90, 50, 0],
	},
	type : "point",
	color: {
		line: "#8f8",
		point: "#0e0",
	},
}
</ptext>

or event both

<ptext>
{ // xy-chart
	label: "graph-line-points",
	caption: "Graph with line and points",
	background: "#fafaff",
	width: 300,
	height: 150,
	data: {
		x: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300],
		y: [0, 65, 100, 130, 145, 150, 140, 120, 90, 50, 0],
	},
	type : "line-point",
	color: {
		line: "#88f",
		point: "#00e",
	},
}
</ptext>

Figures <ptref>graph-line</ptref>, <ptref>graph-points</ptref>, and <ptref>graph-line-points</ptref> are created with only a few lines of code. It can be seen that figure <ptref>graph-line-points</ptref> has both property of figures <ptref>graph-line</ptref> and <ptref>graph-points</ptref> in drawing the results.

A quadratic equation is simply

\begin{equation}
\label{eq:equation-quadratic}
y = ax^2 + bx + c,
\end{equation}

whose roots can be obtained from

\begin{equation}
\label{eq:equation-quadratic-roots}
x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}.
\end{equation}

Implementation of equations \eqref{eq:equation-quadratic} and \eqref{eq:equation-quadratic-roots} in JavaScript can be as follow

{% highlight javascript linenos %}
function roots() {
	// Get equation parameters
	var eqn = arguments[0];
	var a = eqn.a;
	var b = egn.b;
	var c = eqn.c;
	
	// Calculate discriminant
	var D = b * b - 4 * a * c;
	
	// Calculate roots using 
	var x1 = (-b + Math.sqrt(D)) / (2 * a);
	var x2 = (-b - Math.sqrt(D)) / (2 * a);
	
	return [x1, x2];
}
{% endhighlight %}

where equation \eqref{eq:equation-quadratic-roots} is known as [quadratic formula](https://en.wikipedia.org/wiki/Quadratic_formula).

