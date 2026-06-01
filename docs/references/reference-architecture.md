---
layout: default
title: 🏗️ Architecture du Projet
tags: [architecture, structure, technique]
---

# 🏗️ Architecture du Projet

Structure générale de l'application.

## Organisation des fichiers

```
projet/
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   └── styles/
├── tests/
├── docs/
└── package.json
```

## Stack Technologique

- **Frontend**: React/Vue
- **Backend**: Node.js
- **Database**: MongoDB
- **Hosting**: GitHub Pages / Vercel

## Flux de données

1. L'utilisateur interagit avec l'interface
2. L'API traite la requête
3. La base de données est mise à jour
4. La réponse est renvoyée au client

<div class="page-tags">
  <strong>Tags :</strong>
  {% for tag in page.tags %}
    <a href="/docs/tags/{{ tag | slugify }}.html" class="page-tag">{{ tag }}</a>
  {% endfor %}
</div>

[← Retour aux références](/docs/references/)