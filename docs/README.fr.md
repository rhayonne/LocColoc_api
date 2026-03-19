# 📚 Index de la Documentation

---
🌎 Languages: [English](./README.md) | [**Français**](./README.fr.md) | [Português (BR)](./README.pt-br.md)
---

Bienvenue dans la documentation de l'Application LocColoc ! Ce dossier contient la documentation complète pour tous les aspects du système.

---

## 📖 Structure de la Documentation

```text
docs/
├── README.fr.md                       # Ce fichier - Index de la documentation
├── ARCHITECTURE.fr.md                 # 🏗️ Architecture du Système & Monorepo
├── USE_CASES.fr.md                    # 👥 Cas d'utilisation
├── ERD_DIAGRAM.fr.md                  # 🗄️ Diagramme ERD de Base de Données
├── api/                               # Documentation des points d'accès (En Anglais)
│   ├── USER.md                       # API Utilisateur
│   ├── PROPERTY.md                   # API Propriété
│   ├── ROOMS.md                      # API Chambres
│   ├── GARANT.md                     # API Garant
│   └── TYPES_PROPERTY.md             # API Types de Propriétés
├── schemas/                           # Schémas MongoDB (En Anglais)
│   └── DATABASE_SCHEMAS.md           # Référence des schémas
└── guides/                            # Guides d'utilisation (En Anglais)
    ├── ROOMS_PROPERTY_RELATIONSHIP.md # Système d'attachement de chambre
    └── TESTING.md                     # Guide de test
```

---

## 🚀 Commencer

### Nouveau sur le projet ?
1. Commencez avec le [README principal](../README.fr.md) pour un démarrage rapide.
2. Lisez la [Vue d'ensemble du système](#-vue-densemble-du-système) ci-dessous.

### Vous cherchez quelque chose de spécifique ?
- **Architecture** : Voir le [Diagramme d'Architecture](./ARCHITECTURE.fr.md)
- **Cas d'Utilisation** : Voir les [Cas d'Utilisation](./USE_CASES.fr.md)
- **Structure de la DB** : Voir le [Diagramme ERD](./ERD_DIAGRAM.fr.md)

---

## 📋 Vue d'ensemble du Système

### Qu'est-ce que LocColoc ?
LocColoc est une application de gestion locative immobilière :
- **Gestion des utilisateurs** : Locataires, propriétaires, et administrateurs.
- **Biens immobiliers** : Gestion complète des annonces avec images.
- **Chambres** : Gestion des unités de location avec disponibilité.
- **Garants** : Garants financiers pour les locataires.

### Fonctionnalités Clés
✅ **Système multi-rôles** (Locataire, Propriétaire, Admin)
✅ **Authentification sécurisée** (Hachage bcrypt)
✅ **Système strict de disponibilité** des chambres
✅ **Relations automatiques** (Chambres ↔ Propriétés)

---

## 📚 Documentation API

*Note : Les fichiers API sont maintenus en anglais pour s'aligner avec le code source.*

- 👤 **[API User](./api/USER.md)** - Gérer les rôles, mots de passe.
- 🏠 **[API Property](./api/PROPERTY.md)** - Catégorisation, attachement de chambres.
- 🚪 **[API Rooms](./api/ROOMS.md)** - Obtenir les chambres disponibles.
- 👨‍👩‍👧 **[API Garant](./api/GARANT.md)** - Validation d'IBAN et d'e-mails.
- 🏢 **[API TypesProperty](./api/TYPES_PROPERTY.md)** - Créer des types comme Studio, Loft, etc.

---

## 🔍 Référence Rapide

### Rôles Utilisateurs
| Rôle     | Valeur         | Description                |
| -------- | -------------- | -------------------------- |
| Tenant   | `locataire`    | Loue des propriétés        |
| Owner    | `proprietaire` | Possède des propriétés     |
| Admin    | `super_admin`  | Administrateur du système    |

### 📞 Besoin d'Aide ?
Lisez les [Guides d'utilisation (EN)](./guides/) ou exécutez les tests (`npm test`).
