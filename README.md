# 📚 Mon Wiki

Un wiki structuré, professionnel et facile à naviguer créé avec GitHub Pages et Jekyll.

## 🌟 Caractéristiques

✨ **Navigation fluide** - Barre de navigation fixe toujours visible  
🔍 **Recherche en temps réel** - Trouvez rapidement ce que vous cherchez  
🏷️ **Système de tags** - Organisez et filtrez le contenu par tags  
🎨 **Design moderne** - Thème Cayman avec sidebar et responsive  
📱 **Mobile-friendly** - Parfaitement adapté à tous les écrans

## 🌐 Accès au wiki

👉 **[Visiter le Wiki](https://bpic-code.github.io/docs/)**

## 📁 Structure

```
docs/
├── index.md              # Page d'accueil du wiki
├── tags.html             # Page de tous les tags
├── guides/               # Guides de démarrage
├── tutoriels/            # Tutoriels détaillés
├── references/           # Documentation et API
├── faq/                  # Questions fréquentes
└── contributions/        # Guide de contribution

assets/
├── css/style.css         # Styles personnalisés
└── js/                   # Scripts JavaScript
```

## 🚀 Utilisation locale

```bash
git clone https://github.com/bpic-code/bpic-code.github.io.git
cd bpic-code.github.io
bundle install
bundle exec jekyll serve
```

## ✏️ Ajouter une page avec tags

```yaml
---
layout: default
title: Titre de la page
tags: [tag1, tag2, tag3]
---
```

## 🎨 Caractéristiques principales

- **Navbar fixe** avec logo, menu et recherche
- **Sidebar dynamique** avec tous les tags
- **Recherche en temps réel** avec Fuse.js
- **Tags affichés** à la fin de chaque page
- **Design responsive** adapté aux mobiles
- **Thème Cayman** moderne et professionnel

---

**Créé avec ❤️ GitHub Pages & Jekyll**