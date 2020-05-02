---
layout: post
author: user
title: X-last post today
mathjax: true
---

Today we has accomplished in using MathJax and syntax highlighting using Rouge in Jekyll.

A quadratic equation can is simply

\begin{equation}
\label{eq:equation-quadratic}
y = ax^2 + bx + c,
\end{equation}

whose roots can be obtained from

\begin{equation}
\label{eq:equation-quadratic-roots}
x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}.
\end{equation}

Implementation of Equation \eqref{eq:equation-quadratic} dan \eqref{eq:equation-quadratic-roots} in JavaScript can be as follow

{% highlight javascript linenos %}
function roots() {
	var eqn = arguments[0];
}
{% endhighlight %}

