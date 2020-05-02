---
layout: post
author: user
title: X-last post today
mathjax: true
---

Today we has accomplished in using MathJax and syntax highlighting using Rouge in Jekyll.

<!--div style="text-align: center">
<canvas width="300" height="150" style="background: #fafafa">
</canvas>
</div-->

<script lang="javascript">
var div = document.createElement("div:);
div.style.textAlign = "center";

var can = document.createElement("canvas");
can.width = "300";
can.height = "150";
can.style.width = can.width + "px";
can.style.height = can.height + "px";
can.style.background = "#fafafa";

document.body.append(div);
div.append(can);
</script>

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

Implementation of equation \eqref{eq:equation-quadratic} dan \eqref{eq:equation-quadratic-roots} in JavaScript can be as follow

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

https://markvis-editor.js.org/