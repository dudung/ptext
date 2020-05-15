---
layout: default
title: Log
---
# Log
Changes in developing pText are put here, while testing features for a post is in the [posts](blog).

## 0.0.8/20200515-1
Create [tag page](tag.html) from this [tutorial](https://codinfox.github.io/dev/2015/03/06/use-tags-and-categories-in-your-jekyll-based-github-pages/), which is very helpful and simple. And about category, files with the same category will be put in the same folder.

## 0.0.8/20200510-1
End version 0.0.8 and start 0.0.9 with adding quran, a sub-project form the past.

## 0.0.8/20200509-2
Change ``github-mod.css`` in ``assets/css`` according to default value of css [here](https://stackoverflow.com/a/22510220/9475509), triggered by [previous log entry](#00820200509-1), which requires better look in a post when it has sections using ``## section `` or translated to ``<h2>section</h2>``. Found that default ``jekyll`` will convert ``.`` and ``/`` into nothing and ``white-space`` into ``-``.

## 0.0.8/20200509-1
Derive the SI model in [this post](2020/05/08/si-model.html) since yesterday.

## 0.0.8/20200507-2
Try to learn also [Three.js](https://threejs.org/) with this [post](2020/05/07/threejs.html). Even the three.js version looks longer than the x3dom version, but the former seems to have more flexibiity. But his opinion should be proved first.

## 0.0.8/20200507-1
After unsuccessfull in integrating VRML into a HTML using [X_ITE](http://create3000.de/x_ite/getting-started/#embedding-x-ite-within-a-web-page), finally found the [x3dom](https://www.x3dom.org/), which is much easier to show a 3D content. The fist example is here [here](2020/05/07/learn-x3dom.html).

## 0.0.8/20200506-1
Found information that conversion from integer with leading zeros could introduce error while drawing in canvas. It can not be understood yet. This version 0.0.8 still uses canvas coordinate. Add field of ``version`` to differ versions. An example without leading zeros of square signal is [here](2020/05/06/ptext-first-plot.html).

Another information from [here](2020/05/06/ptext-first-plot.html), that title in a post can be styled but without space, e.g. ``pText 1<sup style='font-size:60%;'>st</sup> plot``.

## 0.0.8/20200505-5
Make examples of emoji in [a post](2020/05/05/emoji.html).

## 0.0.8/20200505-4
Make examples of block of code in [a post](2020/05/05/fenced-code-blocks.html).

## 0.0.8/20200505-3
Make examples of equation in [a post](2020/05/05/equation.html).

## 0.0.8/20200505-2
A post link
```
xxxx/yy/zz/post_title.html
```
is consisted of ``xxxx`` for year, ``yy`` for month, ``zz`` for day, dan ``post_title`` for post title from a post filename
```
xxxx-yy-zz-post_title.md
```
The ``.md`` extension will be exclued.

## 0.0.8/20200505-1
Add following line
```python
	gem 'wdm'
```
in the ``Gemfile`` and do
```python
	bundle install
```
that will install the ``wdm`` to avoid polling for changes  as suggested by ``bundle``.

## 0.0.8/20200505-0
Create this ``log.md`` as explained most above. Before this entry, the sufix ``-x`` indicate that day aggregate recorded changes. There are other unrecorded ones.

## 0.0.8/20200504-x
Install ``jemoji`` create ``Gemfile`` with following lines
```python
source 'https://rubygems.org'
gem 'jekyll'
gem 'jemoji'
```
in the ``Gemfile`` and and then
```python
	bundle install
```
to install it. A ``Gemfile.lock`` will be produced. Run ``jekyll``
```python
	bundle exec jekyll serve
```
serve ``localhost:4000`` for local development of pText, where
```python
	jekyll serve
```
is no longer used. I still do not understand the difference.