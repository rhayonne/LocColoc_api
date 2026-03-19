---
🌎 Languages: [English](./README.md) | [**Français**](./README.fr.md) | [Português (BR)](./README.pt-br.md)
---

# LocColoc APP

Système de gestion locative de biens immobiliers construit avec NestJS et MongoDB.

## 📚 Documentation

La documentation complète est disponible dans le dossier [`/docs`](./docs).

### Liens Rapides

- **[Architecture du Système](./docs/ARCHITECTURE.fr.md)** - Monorepo & vue d'ensemble macro
- **[Cas d'Utilisation](./docs/USE_CASES.fr.md)** - Diagrammes visuels des rôles
- **[Diagramme ERD](./docs/ERD_DIAGRAM.fr.md)** - Entités de base de données
- **[Documentation Complète](./docs/README.md)** - Commencez ici pour une vue d'ensemble
- **[Référence API](./docs/api/)** - Documentation détaillée des points d'accès
- **[Schémas de Base de Données](./docs/schemas/DATABASE_SCHEMAS.md)** - Référence des schémas MongoDB
- **[Guide de Test](./docs/guides/TESTING.md)** - Comment tester l'API
- **[Relation Chambres-Propriété](./docs/guides/ROOMS_PROPERTY_RELATIONSHIP.md)** - Système d'attachement de chambre

---

## 🚀 Démarrage Rapide

### Prérequis

- Node.js (v16+)
- MongoDB
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Modifier .env avec votre chaîne de connexion MongoDB

# Lancer en mode développement
npm run start:dev
```

### Variables d'Environnement

```env
MONGODB_URI=mongodb://localhost:27017/loccoloc
PORT=3000
JWT_SECRET=votre-cle-secrete
```

---

## 📖 Aperçu de l'API

### Ressources

| Ressource         | Description                                   | Documentation                                     |
| ----------------- | --------------------------------------------- | ------------------------------------------------- |
| **User**          | Gérer les locataires, propriétaires et admins | [API User](./docs/api/USER.md)                    |
| **Property**      | Gérer les propriétés à louer                  | [API Property](./docs/api/PROPERTY.md)            |
| **Rooms**         | Gérer les unités locatives individuelles      | [API Rooms](./docs/api/ROOMS.md)                  |
| **Garant**        | Gérer les garants pour les locataires         | [API Garant](./docs/api/GARANT.md)                |
| **TypesProperty** | Catégories de types de propriétés             | [API TypesProperty](./docs/api/TYPES_PROPERTY.md) |

---

## 🏗️ Architecture du Système

Veuillez vous référer au document détaillé du [**Diagramme d'Architecture**](./docs/ARCHITECTURE.fr.md), [**Cas d'Utilisation**](./docs/USE_CASES.fr.md), et [**Diagramme de Base de Données ERD**](./docs/ERD_DIAGRAM.fr.md) dans le dossier `docs/` pour une série complète de diagrammes Mermaid.js.

Voici une vue simplifiée :
```
┌─────────────┐
│ Utilisateur │
│ (Locataire/ │
│ Propriétaire│
└──────┬──────┘
       │ 1:n
┌──────┴──────┐
│   Garant    │
└─────────────┘

┌─────────────┐       ┌──────────────┐
│ Utilisateur │ 1:1   │  Propriété   │
│(Propriétaire├───────┤              │
└─────────────┘       └──────┬───────┘
                             │ 1:1
                      ┌──────┴────────┐
                      │ TypePropriété │
                      └───────────────┘

┌─────────────┐       ┌──────────────┐
│  Propriété  │ 1:n   │   Chambres   │
│             ├───────┤              │
└─────────────┘       └──────────────┘
```

---

## ✨ Fonctionnalités Clés

### 🔐 Gestion des Utilisateurs
- Rôles multiples (Locataire, Propriétaire, Admin)
- Hachage sécurisé des mots de passe (bcrypt)
- Validation des emails

### 🏠 Gestion des Propriétés
- Listes complètes des propriétés
- Catégorisation des types de biens
- Association des propriétaires

### 🚪 Système de Disponibilité des Chambres
- **Fonctionnalité unique** : Les chambres ne peuvent être liées qu'à UNE seule propriété
- Suivi automatique des disponibilités
- Disparition de la liste une fois louées ou liées

---

## 📝 Exemple d'Utilisation

### Créer une Propriété avec des Chambres

```bash
# 1. Obtenir les chambres disponibles
curl http://localhost:3000/rooms/available

# 2. Créer une propriété avec les chambres sélectionnées
curl -X POST http://localhost:3000/property \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Appartement Centre",
    "description": "Appartement F3",
    "address": "123 Rue Principale, Paris",
    "surfaceTotal": 80,
    "price": 1500,
    "roomIds": ["ROOM_ID_1", "ROOM_ID_2"],
    "owner": "USER_ID"
  }'
```

---

## 📂 Structure du Projet

```text
loccoloc-monorepo/
├── apps/
│   ├── api/                # Backend API NestJS
│   │   ├── src/
│   │   │   ├── resources/
│   │   │   │   ├── user/           # Gestion User
│   │   │   │   ├── property/       # Gestion Propriété
│   │   │   │   ├── rooms/          # Gestion Chambre
│   │   │   │   ├── garant/         # Gestion Garants
│   │   │   │   ├── types_property/ # Types Propriétés
│   │   │   │   └── support/        # Utilitaires partagés
│   │   │   └── main.ts
│   └── web/                # (Futur) Application Frontend
├── libs/                   # (Futur) Bibliothèques UI
├── docs/                   # 📚 Diagrammes & Documentation
└── README.fr.md            # Ce fichier
```
