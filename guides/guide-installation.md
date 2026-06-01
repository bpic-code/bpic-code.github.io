---
layout: default
title: 📦 Installation du Projet
tags: [setup, debut, installation]
---

# 📦 Installation du Projet

Guide complet pour installer le projet.

## Prérequis

- Node.js v14+
- npm ou yarn
- Git

## Étapes d'installation

### 1. Cloner le repository

```bash
git clone https://github.com/bpic-code/projet.git
cd projet
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le serveur

```bash
npm start
```

### 4. Vérifier l'installation

Visitez `http://localhost:3000`

<div class="page-tags">
  <strong>Tags :</strong>
  {% for tag in page.tags %}
    <a href="/docs/tags/{{ tag | slugify }}.html" class="page-tag">{{ tag }}</a>
  {% endfor %}
</div>

[← Retour aux guides](/docs/guides/)