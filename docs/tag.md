---
layout: default
title: Tag
---

{% comment %}
url https://codinfox.github.io/dev/2015/03/06/use-tags-and-categories-in-your-jekyll-based-github-pages/ [20200515]
{% endcomment %}

{% comment %}
=======================
The following part extracts all the tags from your posts and sort tags, so that you do not need to manually collect your tags to a place.
=======================
{% endcomment %}
{% assign rawtags = "" %}
{% for post in site.posts %}
	{% assign ttags = post.tags | join:'|' | append:'|' %}
	{% assign rawtags = rawtags | append:ttags %}
{% endfor %}
{% assign rawtags = rawtags | split:'|' | sort %}

{% comment %}
=======================
The following part removes dulpicated tags and invalid tags like blank tag.
=======================
{% endcomment %}
{% assign tags = "" %}
{% for tag in rawtags %}
	{% if tag != "" %}
		{% if tags == "" %}
			{% assign tags = tag | split:'|' %}
		{% endif %}
		{% unless tags contains tag %}
			{% assign tags = tags | join:'|' | append:'|' | append:tag | split:'|' %}
		{% endunless %}
	{% endif %}
{% endfor %}


{% comment %}
=======================
The purpose of this snippet is to list all your posts posted with a certain tag.
=======================
{% endcomment %}
{% for tag in tags %}
<h2 id="{{ tag | slugify }}">{{ tag }}</h2>
<ul>
	{% for post in site.posts %}
		{% if post.tags contains tag %}
		<li>
		<h3>
		<a href="{{ post.url }}">
		{{ post.title }}
		<small>{{ post.date | date_to_string }}</small>
		</a>

		{% comment %}
		{% for tag in post.tags %}
			<a class="tag" href="/blog/tag/#{{ tag | slugify }}">{{ tag }}</a>
		{% endfor %}
		{% endcomment %}	 
	 
		</h3>
		</li>
		{% endif %}
	{% endfor %}
</ul>
{% endfor %}
