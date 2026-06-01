# 📚 Mon Wiki

Un wiki structuré et facile à naviguer créé avec GitHub Pages et Jekyll.

## 🌐 Accès au wiki

👉 [Visiter le Wiki](https://bpic-code.github.io/docs/)

## 📁 Structure

```
docs/
├── index.md              # Page d'accueil du wiki
├── guides/               # Guides de démarrage
│   ├── index.md
│   ├── installation.md
│   ├── configuration.md
│   └── demarrage-rapide.md
├── tutoriels/            # Tutoriels détaillés
│   ├── index.md
│   ├── tutoriel-1.md
│   ├── tutoriel-2.md
│   └── exemples/
│       └── exemple-1.md
├── references/           # Documentation et API
│   ├── index.md
│   ├── api.md
│   └── glossaire.md
├── faq/                  # Questions fréquentes
│   ├── index.md
│   └── questions-communes.md
└── contributions/        # Guide de contribution
    ├── index.md
    └── comment-contribuer.md
```

## 🚀 Utilisation locale

### Prérequis

- Ruby 2.7+
- Bundler

### Installation

```bash
# Cloner le repository
git clone https://github.com/bpic-code/bpic-code.github.io.git
cd bpic-code.github.io

# Installer les dépendances
bundle install

# Lancer le serveur local
bundle exec jekyll serve
```

Visitez `http://localhost:4000` dans votre navigateur.

## ✏️ Comment modifier le wiki

1. Modifiez les fichiers markdown dans le dossier `docs/`
2. Commitez vos changements : `git commit -m "Description"`
3. Pushez vers GitHub : `git push`
4. GitHub Pages déploiera automatiquement en quelques secondes

## 🤝 Contribuer

Consultez le guide [Comment Contribuer](docs/contributions/comment-contribuer.md)

## 📄 Licence

Ce projet est ouvert à la contribution. Voir LICENSE pour plus de détails.

---

**Créé avec ❤️ GitHub Pages & Jekyll**