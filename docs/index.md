<ul>
  {% for post in site.posts %}
    <li>
      <a href="/ptext" "{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
