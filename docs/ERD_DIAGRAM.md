---
🌎 Languages: [**English**](./ERD_DIAGRAM.md) | [Français](./ERD_DIAGRAM.fr.md) | [Português (BR)](./ERD_DIAGRAM.pt-br.md)
---

# 🗄️ Entity-Relationship Diagram (ERD)
This diagram visualizes the MongoDB data model for LocColoc based on the NestJS Mongoose schemas.

```mermaid
erDiagram
    %% Entities
    USER {
        ObjectId _id PK
        string email
        string password "Hashed"
        string role "Tenant, Owner, Admin"
        string firstName
        string lastName
        array garants "References Garant"
    }

    PROPERTY {
        ObjectId _id PK
        string name
        string description
        string address
        number surfaceTotal
        number price
        ObjectId owner FK "References User"
        array roomIds "References Rooms"
        ObjectId typeProperty FK "References TypesProperty"
    }

    ROOM {
        ObjectId _id PK
        string name
        number surface
        boolean available
        ObjectId propertyId FK "References Property"
    }

    GARANT {
        ObjectId _id PK
        string firstName
        string lastName
        string email
        string iban
        ObjectId tenant FK "References User"
    }

    TYPES_PROPERTY {
        ObjectId _id PK
        string name
        string description
    }
    
    CONTRACT {
        ObjectId _id PK
        ObjectId propertyId FK "References Property"
        ObjectId tenantId FK "References User"
        date startDate
        date endDate
        string status
    }

    %% Relationships
    USER ||--o{ PROPERTY : "owns (1:N)"
    USER ||--o{ GARANT : "has (1:N)"
    USER ||--o{ CONTRACT : "signs as tenant (1:N)"
    
    PROPERTY }|--|| TYPES_PROPERTY : "categorized by (N:1)"
    PROPERTY ||--o{ ROOM : "contains (1:N)"
    PROPERTY ||--o{ CONTRACT : "leased under (1:N)"
    
    ROOM ||--o| PROPERTY : "attached to (1:1)"
```

## Relationship Details
- **User (Owner) ↔ Property**: One Owner can have multiple Properties.
- **Property ↔ Rooms**: A Property contains multiple Rooms. However, a Room is exclusively tied to ONE Property at a given time or is floating/available.
- **User (Tenant) ↔ Garant**: A Tenant can register multiple guarantors (Garants).
- **Property ↔ TypesProperty**: A Property is classified under one category (e.g., Apartment, Studio, House).
