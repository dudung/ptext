---
layout: post
author: viridi
title: Expansion of SI model solution
mathjax: true
ptext: false
x3dom: false
threejs: false
---
McLaurien series expansion of SI epidemic model.

## Solution of SI model
It has been shonwn in [previous post](../08/si-model.html) that

\begin{equation}
\label{egn:model-si-normalized-solution}
i = \frac{i_0 e^{\beta \lt k \gt t}}{1 + i_0 \left(e^{\beta \lt k \gt t} - 1 \right)}
\end{equation}

is the solution of SI (susceptible-infectious) model, whose

\begin{equation}
\label{egn:model-si-differential-equation}
\frac{di}{dt} = \beta \lt k \gt (1- i) i,
\end{equation}

is the differential equation.

## Simplify solution terms
We can define $a \equiv i_0$, $b \equiv \beta \lt k \gt$ and $c = (1- a)$, which reduce the symbols in Eqn \eqref{egn:model-si-normalized-solution} to be

\begin{equation}
\label{egn:model-si-normalized-solution-abc}
i = \frac{a e^{b t}}{1 + a \left(e^{b t} - 1 \right)} = \frac{a e^{b t}}{(1 - a) + a e^{b t}} = \frac{a e^{b t}}{a e^{b t} + c}.
\end{equation}

Then we can also define

\begin{equation}
\label{egn:model-si-normalized-definition-f}
f \equiv f(t) = ae^{bt} + c,
\end{equation}

which turn Eqn \eqref{egn:model-si-normalized-solution-abc} into

\begin{equation}
\label{egn:model-si-normalized-solution-f}
i = (f - c) f^{-1},
\end{equation}

that is more simple, hopefully.

## Time derivative of $f^{-1}$
The $n$-th time derivatif of $f^{-1}$ is denoted as $f^{-1}_{n}$. Then

\begin{equation}
\label{egn:model-si-normalized-f_1-derivative-1}
f^{-1}_1 = \frac{d}{dt} \left( \frac{1}{ae^{bt} + c} \right) = -f^{-2} ab e^{bt}
\end{equation}

is the 1-st time derivative. The 2-nd will be

\begin{equation}
\label{egn:model-si-normalized-f_1-derivative-2}
f^{-1}_2 = \frac{d}{dt} \left[ -\frac{ab e^{bt}}{\left( ae^{bt} + c \right)^2} \right] = 2f^{-3} a^2 b^ 2 e^{2bt} - f^{-2} a b^2 e^{bt},
\end{equation}

the 3-rd

\begin{equation}
\label{egn:model-si-normalized-f_1-derivative-3}
f^{-1}_3 = \frac{d}{dt} \left[ \frac{2 a^2 b^2 e^{2bt}}{\left( ae^{bt} + c \right)^3} - \frac{a b^2 e^{bt}}{\left( ae^{bt} + c \right)^2} \right] = -6f^{-4} a^3 b^3 e^{3bt} + 6f^{-3} a^2 b^3 e^{2bt} - f^{-2} ab^3 e^{bt}.
\end{equation}

And for the $n$-th, it could be

\begin{equation}
\label{egn:model-si-normalized-f_1-derivative-n}
f^{-1}_n = (-1)^n n! f^{-1-n} a^n b^n e^{nbt} + (-1)^{n-1} f^{-1-n+1}  a^{n-1} b^n e^{(n-1)bt} \dots - f^{-2} a b^n e^{bt}.
\end{equation}

Coefient of the first and last term are already clear, which are $(-1)^n n!$ and $-1$, but the others must be still discovered. A home work for me, :smiley:.

## McLaurien series
Eqn \eqref{egn:model-si-normalized-solution-f} will have expansion

\begin{equation}
\label{egn:model-si-normalized-solution-maclaurin-1}
i(t) = [f(0) - c] f^{-1}(0) + \left\\{f_1(0) f^{-1}(0) + [f(0) - c] f^{-1}_1 \right\\} t + \dots,
\end{equation}

that leads to

\begin{equation}
\label{egn:model-si-normalized-solution-maclaurin-2}
i(t) = a + ba(1- a) t + \dots. 
\end{equation}

Further discussion will be postoned for now due to current limited knowledge and time.
