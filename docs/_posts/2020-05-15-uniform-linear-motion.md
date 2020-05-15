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


## Perpindahan dan jarak
Bila saat $t = t_1$ benda berada pada posisi $x(t_1) = x_1$ dan saat $t = t_2 > t_1$ berada pada posisi $x(t_2) = x_2$, maka perpindahan benda adalah posisi awal dikurangi posisi akhir

\begin{equation}
\label{eqn:motion-linear-uniform-displacement}
\Delta x = x_f - x_i = x_2 - x_1,
\end{equation}

dengan indeks $i$ berarti inisial (awal) dan $f$ berarti final (akhir). Digunakan $x_f = x_2$ karena $t_2 > t_1$, dengan demikian $x_i = x_1$.

Sedangkan jarak adalah panjang lintasan yang ditempuh sebagai benda bergerak dari posisi awal $x_i$ ke posisi akhir $x_f$. Untuk kasus GLB tunggal yang saat ini sedang dibahas akan diperoleh hasil yang sama

\begin{equation}
\label{eqn:motion-linear-uniform-distance}
s_x = |x_f - x_i| = |x_2 - x_1|,
\end{equation}

akan tetapi jarak selalu bernilai positif, sehingga terdapat tanda mutlak.

## Rangkaian GLB
Pada suatu rangkaian GLB, di mana dalam rentang waktu yang berbeda benda ber-GLB dengan kecepatan yang berbeda, p. \eqref{eqn:motion-linear-uniform-displacement} akan memiliki bentuk yang sama, akan tetapi p.  \eqref{eqn:motion-linear-uniform-distance} akan memiliki formula yang berbeda, yaitu menjadi

\begin{equation}
\label{eqn:motion-linear-uniform-distance-multi}
s_x = |x_f - x_{f-1}| + |x_{f-1} - x_{f-2}| + \dots + |x_{i+2} - x_{i+1}| + |x_{i + 1} - x_i|,
\end{equation}

dengan pada pada segmen ke-$n$ benda ber-GLB dengan kecepatan $v_n$ tertentu. Untuk rangkaian GLB ini p. \eqref{eqn:motion-linear-uniform-displacement} bila dituliskan seperti p. \eqref{eqn:motion-linear-uniform-distance-multi} akan menjadi

\begin{equation}
\label{eqn:motion-linear-uniform-displacement-multi}
\Delta x = (x_f - x_{f-1}) + (x_{f-1} - x_{f-2}) + \dots + (x_{i+2} - x_{i+1}) + (x_{i + 1} - x_i),
\end{equation}

yang tak lain akan kembali menjadi p. \eqref{eqn:motion-linear-uniform-displacement}.

## Latihan
1. Sebuah benda berada pada posisi $x = 4$ m pada $t = 2$ s. Tentukanlah kecepatan benda bila saat $t = 0$ s benda berada pada posisi $x = 0$ m.
<br /> $v = 2$ m/s;

2. Saat $t$ = 0 s benda berada pada pusat koordinat. Bila kecepatan tetap benda adalah -1.5 m/s, tentukanlah posisi benda saat $t =  10$ s. Berapakah nilai $t_0$ dan $x_0$?
<br /> -15 m (atau 15 m di sebelah kiri posisi awal); $t_0$ = 0 s, $x_0$ = 0 m;

3. Sebuah benda titik yang sedang ber-GLB memiliki kecepatan 5 m/s dan berada pada posisi 10 m pada waktu $t$ = 2 s. a) Tuliskan rumus kecepatan dan posisi setiap saat benda. b) Hitunglah kecepatan dan posisi benda saat $t$ = 5 s.
<br /> $v(t)$ = 5 m/s, $x(t) = 10 + 5(t - 2)$ m; 5 m/s, 25 m;

4. Sebuah benda ber-GLB dalam empat segmen berbeda yaitu berkecepatan $v_1$ antara posisi $x_0$ dan $x_1$, berkecepatan $v_2$ antara posisi $x_1$ dan $x_2$, berkecepatan $v_3$ antara posisi $x_2$ dan $x_3$, dan berkecepatan $v_4$ antara posisi $x_3$ dan $x_4$, dengan $x_1 < x_2 < x_4 < x_3$ dan $v_1 > 0$, $v_2 > 0$, $v_3 > 0$, akan tetapi $v_4 < 0$. Tentukanlah perpindahan dan jarak keseluruhan benda dari posisi $x_1$ sampai posisi $x_4$. Nyatakan jawabannya dalam $x_1 \dots x_4$.
<br /> $\Delta x = x_4 - x_1$, $s = |x_2 - x_1| + |x_3 - x_2| + |x_4 - x_3|$;

5. Sebuah benda berada pada posisi $x_0$ saat $t = t_0$, pada posisi $x_1$ saat $t = t_1$, dan posisi $x_2$ saat $t = t_2$, dengan $x_1 < x_2 < x_3$. Bila $v_1 > 0$ dan $v_2 < 0$, tentukanlah nila $v_1$ dan $v_2$ agar perpindahannya adalah nol. Tentukan jarak yang ditempuh benda.
<br /> $v_1 = (x_1 - x_0)/(t_1 - t_0) > 0$,  $v_2 = (x_2 - x_1)/(t_2 - t_1) = (x_0 - x_1)/(t_2 - t_1) < 0$; $s_x = |x_1 - x_0| + |x_2 - x_1| = (x_1 - x_0) - (x_0 - x_1) = 2(x_1 - x_0)$;
