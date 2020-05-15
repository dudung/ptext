---
layout: post
author: viridi
title: Gerak lurus beraturan
mathjax: true
ptext: false
x3dom: false
threejs: false
category: physics
tags: [kinematics]
---
Gerak lurus beraturan (en: [uniform linear motion](https://en.wikipedia.org/wiki/Linear_motion)), yang disingkat dengan GLB, merupakan gerak benda dalam 1-d dengan kecepatan tetap.

## Kecepatan
Benda yang bergerak lurus dengan kecepatan tetap, atau sedang ber-GLB, akan memiliki kecepatan

\begin{equation}
\label{eqn:motion-linear-uniform-velocity}
v(t) = v_0
\end{equation}

untuk setiap saat $t$ dengan $v_0$ adalah suatu konstanta. Nilai ini tak lain adalah nilai kecepatan saat $t =  t_0$

\begin{equation}
\label{eqn:motion-linear-uniform-velocity-t0}
v(t_0) = v_0,
\end{equation}

yang untuk saat ini tidak terlihat perbedaannya dengan p. \eqref{eqn:motion-linear-uniform-velocity}.

## Posisi
Posisi setiap saat benda diberikan oleh

\begin{equation}
\label{eqn:motion-linear-uniform-position}
x(t) = x_0 + v_0 (t - t_0),
\end{equation}

dengan $x_0$ adalah

\begin{equation}
\label{eqn:motion-linear-uniform-position-t0}
x(t_0) = x_0
\end{equation}

atau posisi saat $t = t_0$.

Ilustrasi pada p. \eqref{eqn:motion-linear-uniform-position-t0} seharusnya lebih jelas dari p. \eqref{eqn:motion-linear-uniform-velocity-t0} dalam menunjukkan peran dari $t_0$ sebagai suatu acuan waktu yang memberikan nilai-nilai $v_0$ dan $x_0$.

## Acuan waktu
Dalam p. \eqref{eqn:motion-linear-uniform-velocity} dan \eqref{eqn:motion-linear-uniform-position} digunakan acuan waktu $t_0$, yang dalam banyak sumber, disederhanakan dengan memilih

\begin{equation}
\label{eqn:motion-linear-uniform-t0=0}
t_0 = 0,
\end{equation}

sehingga persoalan dapat menjadi lebih sederhana akan tetapi menyembunyikan informasi terdapatnya acuan waktu tersebut. Hal ini akan diperkukan kelak dalam persoalan rangkaian gerak lurus dan gerak-gerak lainnya, di mana acuan waktu yang berbeda akan memberikan nilai konstanta berbeda untuk kecepatan dan posisi.

## Latihan
1. Saat $t$ = 0 s benda berada pada pusat koordinat. Bila kecepatan tetap benda adalah -1.5 m/s, tentukanlah posisi benda saat $t =  10$ s. Berapakah nilai $t_0$ dan $x_0$?
<br />-15 m (atau 15 m di sebelah kiri posisi awal); $t_0$ = 0 s, $x_0$ = 0 m;
2. Sebuah benda titik yang sedang ber-GLB memiliki kecepatan 5 m/s dan berada pada posisi 10 m pada waktu $t$ = 2 s. a) Tuliskan rumus kecepatan dan posisi setiap saat benda. b) Hitunglah kecepatan dan posisi benda saat $t$ = 5 s.
<br />$v(t)$ = 5 m/s, $x(t) = 10 + 5(t - 2)$ m; 5 m/s, 25 m;
