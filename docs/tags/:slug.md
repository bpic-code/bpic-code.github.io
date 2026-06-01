---
permalink: /docs/tags/:slug.html
layout: default
---

{% assign tag = page.name | replace: '.html' | replace: '.md' %}
{% assign tag = tag | replace: '-' | split: '' | map: 'upcase' | join: '' %}

# 🏷️ Pages avec le tag "{{ page.name | replace: '.html' | replace: '.md' | replace: '-', ' ' }}"

{% assign tagged_pages = site.pages | where_exp: "page", "page.tags contains page.name" %}

<ul class="pages-list">
{% for page in tagged_pages %}
  <li><a href="{{ page.url }}">{{ page.title }}</a></li>
{% endfor %}
</ul>

[← Retour à tous les tags](/docs/tags.html)