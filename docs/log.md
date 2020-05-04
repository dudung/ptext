---
layout: default
title: Log
---
# Log
Changes in developing pText are put here, while testing features for a post is in the [posts](blog).

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