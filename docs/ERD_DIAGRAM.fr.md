---
🌎 Languages: [English](./ERD_DIAGRAM.md) | [**Français**](./ERD_DIAGRAM.fr.md) | [Português (BR)](./ERD_DIAGRAM.pt-br.md)
---

# 🗄️ Diagramme Entité-Relation (ERD)

Ce diagramme visualise le modèle de données MongoDB pour LocColoc basé sur les schémas NestJS Mongoose.

```mermaid
erDiagram
    %% Entities
    USER {
        ObjectId _id PK
        string email
        string password "Hashed"
        string role "Locataire, Propriétaire, Admin"
        string firstName
        string lastName
        array garants "Références Garant"
    }

    PROPERTY {
        ObjectId _id PK
        string name
        string description
        string address
        number surfaceTotal
        number price
        ObjectId owner FK "Références User"
        array roomIds "Références Rooms"
        ObjectId typeProperty FK "Références TypesProperty"
    }

    ROOM {
        ObjectId _id PK
        string name
        number surface
        boolean available
        ObjectId propertyId FK "Références Property"
    }

    GARANT {
        ObjectId _id PK
        string firstName
        string lastName
        string email
        string iban
        ObjectId tenant FK "Références User"
    }

    TYPES_PROPERTY {
        ObjectId _id PK
        string name
        string description
    }
    
    CONTRACT {
        ObjectId _id PK
        ObjectId propertyId FK "Références Property"
        ObjectId tenantId FK "Références User"
        date startDate
        date endDate
        string status
    }

    %% Relationships
    USER ||--o{ PROPERTY : "possède (1:N)"
    USER ||--o{ GARANT : "a pour garants (1:N)"
    USER ||--o{ CONTRACT : "signe comme locataire (1:N)"
    
    PROPERTY }|--|| TYPES_PROPERTY : "catégorisé par (N:1)"
    PROPERTY ||--o{ ROOM : "contient (1:N)"
    PROPERTY ||--o{ CONTRACT : "loué sous (1:N)"
    
    ROOM ||--o| PROPERTY : "attaché à (1:1)"
```

## Détails des Relations
- **Utilisateur (Propriétaire) ↔ Propriété** : Un Propriétaire peut posséder plusieurs Propriétés.
- **Propriété ↔ Chambres** : Une Propriété contient plusieurs Chambres. Cependant, une Chambre est exclusivement liée à UNE Propriété ou reste flottante/disponible.
- **Utilisateur (Locataire) ↔ Garant** : Un Locataire peut déclarer plusieurs garants.
- **Propriété ↔ Type de Propriété** : Une Propriété est classée sous une seule catégorie (ex: Appartement, Studio, Maison).
