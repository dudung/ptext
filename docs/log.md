---
layout: default
title: Log
---
# Log
Changes in developing pText are put here, while testing features for a post is in the [posts](blog).

## 0.0.8/20200505-5
Make examples of emoji in [a post](2020/05/05/emoji.html).

## 0.0.8/20200505-4
Make examples of block of code in [a post](2020/05/05/fenced-code-blocks.html).

## 0.0.8/20200505-3
Make examples of equation in [a post](2020/05/05/equation.html).

## 0.0.8/20200505-2
A post link
```
xxxx/yy/zz/a.html
```
is consisted of ``xxxx`` for year, ``yy`` for month, ``zz`` for day, dan ``a`` for post title from post filename
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