---
layout: default
title: 🤝 Comment Contribuer
tags: [contribution, guide, communauté]
---

# 🤝 Comment Contribuer

Nous accueillons les contributions de la communauté !

## Étapes pour contribuer

### 1. Fork le repository

Cliquez sur le bouton "Fork" sur GitHub.

### 2. Clonez votre fork

```bash
git clone https://github.com/VOTRE_USERNAME/bpic-code.github.io.git
cd bpic-code.github.io
```

### 3. Créez une branche

```bash
git checkout -b feature/ma-contribution
```

### 4. Faites vos modifications

- Modifiez les fichiers
- Testez vos changements
- Commitez avec des messages clairs

```bash
git commit -m "Ajout de ma contribution"
```

### 5. Pushez vers votre fork

```bash
git push origin feature/ma-contribution
```

### 6. Créez une Pull Request

Allez sur GitHub et créez une Pull Request vers la branche `main`.

## Bonnes pratiques

✅ Écrivez du markdown clair  
✅ Vérifiez l'orthographe  
✅ Testez les liens  
✅ Respectez la structure des dossiers  
✅ Ajoutez des tags pertinents à vos pages  

## Questions ?

Ouvrez une issue ou contactez les mainteneurs.

---

<div class="page-tags">
  <strong>Tags :</strong>
  {% for tag in page.tags %}
    <a href="/docs/tags.html" class="page-tag">{{ tag }}</a>
  {% endfor %}
</div>

## 🔗 Navigation

[← Retour aux Contributions](index.md) | [Retour au Wiki](../index.md)