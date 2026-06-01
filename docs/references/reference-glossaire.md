---
layout: default
title: 📖 Glossaire Technique
tags: [glossaire, reference, terminologie]
---

# 📖 Glossaire Technique

Dictionnaire des termes techniques.

## A

**API**  
Application Programming Interface - Interface permettant la communication entre applications.

**Authentication**  
Processus de vérification de l'identité d'un utilisateur.

## D

**Database**  
Base de données - Système de stockage des données.

**Deployment**  
Déploiement - Mise en ligne d'une application.

## E

**Endpoint**  
Point d'accès d'une API HTTP.

## R

**Repository**  
Dépôt de code source.

**REST**  
Representational State Transfer - Style architectural pour les services web.

<div class="page-tags">
  <strong>Tags :</strong>
  {% for tag in page.tags %}
    <a href="/docs/tags/{{ tag | slugify }}.html" class="page-tag">{{ tag }}</a>
  {% endfor %}
</div>

[← Retour aux références](/docs/references/)