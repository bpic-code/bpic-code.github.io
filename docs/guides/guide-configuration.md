---
layout: default
title: ⚙️ Configuration Avancée
tags: [configuration, avance, setup]
---

# ⚙️ Configuration Avancée

Configurer votre projet pour la production.

## Fichier .env

Créez un fichier `.env` à la racine :

```env
API_URL=https://api.example.com
DEBUG=false
PORT=3000
DATABASE_URL=mongodb://...
```

## Variables d'environnement

| Variable | Description | Défaut |
|----------|-------------|--------|
| API_URL | URL de l'API | - |
| DEBUG | Mode debug | true |
| PORT | Port du serveur | 3000 |
| DATABASE_URL | URL de la DB | - |

## Build pour la production

```bash
npm run build
npm start
```

<div class="page-tags">
  <strong>Tags :</strong>
  {% for tag in page.tags %}
    <a href="/docs/tags/{{ tag | slugify }}.html" class="page-tag">{{ tag }}</a>
  {% endfor %}
</div>

[← Retour aux guides](/docs/guides/)