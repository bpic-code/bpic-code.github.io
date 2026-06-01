---
layout: default
title: ⚙️ Configuration
tags: [configuration, setup, tutoriel]
---

# ⚙️ Configuration

Guide de configuration du projet.

## Fichier de configuration

Créez un fichier `.env` à la racine du projet :

```env
API_URL=https://api.example.com
DEBUG=true
PORT=3000
```

## Variables d'environnement

| Variable | Description | Défaut |
|----------|-------------|--------|
| `API_URL` | URL de l'API | - |
| `DEBUG` | Mode debug | `false` |
| `PORT` | Port du serveur | `3000` |

---

<div class="page-tags">
  <strong>Tags :</strong>
  {% for tag in page.tags %}
    <a href="/docs/tags.html" class="page-tag">{{ tag }}</a>
  {% endfor %}
</div>

## 🔗 Navigation

[← Retour aux Guides](index.md) | [Retour au Wiki](../index.md)