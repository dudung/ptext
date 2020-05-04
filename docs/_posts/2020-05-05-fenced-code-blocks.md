---
layout: post
author: viridi
title: Fenced code blocks
mathjax: true
ptext: true
---
An example how to display block of code using [fenced code blocks](https://www.markdownguide.org/extended-syntax/#fenced-code-blocks) feature.

Roots from a quadratic equation can calculated using following code

```javascript
function roots(a, b, c) {
	// Calculate discriminant
	var D = b * b - 4 * a * c;
	
	// Calculate 1st root
	var x1 = (-b + Math.sqrt(D)) / (2 * a);

	// Calculate 2nd root
	var x2 = (-b - Math.sqrt(D)) / (2 * a);
	
	return [x1, x2];
}
```

The code ``roots(1, -5, 6).[0]`` will give 3, while ``roots(1, -5, 6).[1]`` will produce 2, as they are roots of the quadratic equation $y = x^2 - 5x + 6$.

## Block of code
Previous block of code is obtained using
``
```javascript
function roots(a, b, c) {
	// Calculate discriminant
	var D = b * b - 4 * a * c;
	
	// Calculate 1st root
	var x1 = (-b + Math.sqrt(D)) / (2 * a);

	// Calculate 2nd root
	var x2 = (-b - Math.sqrt(D)) / (2 * a);
	
	return [x1, x2];
}
```
``
as a paragraph.

## Inline code
And the example of ``roots(1, -5, 6).[1]`` is produced using

```
``roots(1, -5, 6).[1]``
```

by putting it in a line.