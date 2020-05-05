---
layout: post
author: viridi
title: pText 1<sup style='font-size:60%;'>st</sup> plot
mathjax: true
ptext: true;
---
An example of using pText first version plot.

It is still a pure JavaScript version which uses pairs of ``<script>`` and ``</script>``. Suppose that there are data of $x$

<code>
1, 1, 20, 20, 40, 40, 60, 60, 80, 80, 100, 100, 110, 110, 120, 120, 130, 130, 140, 140, 150, 150, 160, 160, 170, 170, 180, 180, 190, 190, 199, 199, <br />
</code>

and $y$

<code>
0, 100, 100, 0, 0, 100, 100, 0, 0, 100, 100, 0, 0, 100, 100, 0, 0, 100, 100, 0, 0, 100, 100, 0, 0, 100, 100, 0, 0, 100, 100, 0,
</code>

that can be used to draw a chart shown in Fig. <ptref>fig-siqnal-square</ptref>.

<ptext>
{ // xy-chart
	version: "0.0.8",
	label: "fig-siqnal-square",
	caption: "Square signal using pText",
	background: "#fff0f0",
	width: 200,
	height: 100,
	data: {
		x: [1, 1, 20, 20, 40, 40, 60, 60, 80, 80, 100, 100, 110, 110, 120, 120, 130, 130, 140, 140, 150, 150, 160, 160, 170, 170, 180, 180, 190, 190, 199, 199],
		y: [0, 100, 100, 0, 0, 100, 100, 0, 0, 100, 100, 0, 0, 100, 100, 0, 0, 100, 100, 0, 0, 100, 100, 0, 0, 100, 100, 0, 0, 100, 100, 0],
	},
	type : "line",
	color: {
		line: "#f00",
		point: "#0e0",
	},
}
</ptext>

## Insert a xy-chart
Fig. <ptref>fig-siqnal-square</ptref> can be obtained using following code

```javascript
<ptext>
{ // xy-chart
	version: "0.0.8",
	label: "fig-siqnal-square",
	caption: "Graph with points",
	background: "#fafffa",
	width: 200,
	height: 100,
	data: {
		x: [1, 1, 20, 20, 40, 40, 60, 60, 80, 80, 100, 100, 110,
		110, 120, 120, 130, 130, 140, 140, 150, 150, 160, 160,
		170, 170, 180, 180, 190, 190, 199, 199],
		y: [0, 100, 100, 0, 0, 100, 100, 0, 0, 100, 100, 0, 0,
		100, 100, 0, 0, 100, 100, 0, 0, 100, 100, 0, 0, 100, 100,
		0, 0, 100, 100, 0],
	},
	type : "line",
	color: {
		line: "#f00",
		point: "#0e0",
	},
}
</ptext>
```

## Referring a chart
Created figure can referred using

```javascript
<ptref>fig-siqnal-square</ptref>
```

by putting it in a line, which produces <ptref>fig-siqnal-square</ptref>. Note hat the tag pairs ``<ptref>`` dan ``</ptref>`` should contain the right label, which is ``fig-siqnal-square`` in this case. Campare the value of label in the block of code and in the line referring it.

## Plan
0. Add default value of parameters, when some are not passed or defined.
1. Introduce coordinate transformation for more convenient use.
2. Make it can plot a function within ``x_range`` and ``y_range``.
3. Design better view, e.g. margin, axis, grid.
4. Add option of marker types.
5. Change the name ``<ptext>`` to ``<ptchar>`` for consistency with ``<ptref>``?

## Note
Feature of ``\ptref{label}`` in [here](../03/first-success-post.html) is cancelled, since the behaviour is unpredictable. It also still access <code>```some code with \ptref{label}```</code>, while ``<ptref>label</ptref>`` is easier to manage.
