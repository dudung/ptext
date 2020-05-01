<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ site.url }}" "{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
