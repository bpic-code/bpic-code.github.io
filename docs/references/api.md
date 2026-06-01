---
layout: default
---

# 🔌 Documentation API

Référence complète de l'API.

## Endpoints

### GET /api/users

Récupère la liste des utilisateurs.

**Réponse :**

```json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ]
}
```

### POST /api/users

Crée un nouvel utilisateur.

**Paramètres :**

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

### GET /api/users/:id

Récupère un utilisateur spécifique.

---

## 🔗 Navigation

[← Retour aux Références](index.md) | [Retour au Wiki](../index.md)