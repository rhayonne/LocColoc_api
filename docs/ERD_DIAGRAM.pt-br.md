---
🌎 Languages: [English](./ERD_DIAGRAM.md) | [Français](./ERD_DIAGRAM.fr.md) | [**Português (BR)**](./ERD_DIAGRAM.pt-br.md)
---

# 🗄️ Diagrama Entidade-Relacionamento (ERD)

Este diagrama visa expor o modelo de dados MongoDB para a LocColoc com base nos esquemas do NestJS Mongoose.

```mermaid
erDiagram
    %% Entities
    USER {
        ObjectId _id PK
        string email
        string password "Hashed"
        string role "Locatário, Proprietário, Admin"
        string firstName
        string lastName
        array garants "Referências Garant"
    }

    PROPERTY {
        ObjectId _id PK
        string name
        string description
        string address
        number surfaceTotal
        number price
        ObjectId owner FK "Referências User"
        array roomIds "Referências Rooms"
        ObjectId typeProperty FK "Referências TypesProperty"
    }

    ROOM {
        ObjectId _id PK
        string name
        number surface
        boolean available
        ObjectId propertyId FK "Referências Property"
    }

    GARANT {
        ObjectId _id PK
        string firstName
        string lastName
        string email
        string iban
        ObjectId tenant FK "Referências User"
    }

    TYPES_PROPERTY {
        ObjectId _id PK
        string name
        string description
    }
    
    CONTRACT {
        ObjectId _id PK
        ObjectId propertyId FK "Referências Property"
        ObjectId tenantId FK "Referências User"
        date startDate
        date endDate
        string status
    }

    %% Relationships
    USER ||--o{ PROPERTY : "possui (1:N)"
    USER ||--o{ GARANT : "tem como fiador (1:N)"
    USER ||--o{ CONTRACT : "assina como locatário (1:N)"
    
    PROPERTY }|--|| TYPES_PROPERTY : "categorizada por (N:1)"
    PROPERTY ||--o{ ROOM : "contém (1:N)"
    PROPERTY ||--o{ CONTRACT : "alugada sob (1:N)"
    
    ROOM ||--o| PROPERTY : "anexado à (1:1)"
```

## Detalhes dos Relacionamentos
- **Usuário (Proprietário) ↔ Propriedade**: Um Proprietário pode ter múltiplas Propriedades.
- **Propriedade ↔ Quartos**: Uma Propriedade contém múltiplos Quartos. Contudo, um Quarto é exclusivamente vinculado a UMA Propriedade a qualquer momento ou fica disponível/solto.
- **Usuário (Locatário) ↔ Fiador**: Um Locatário pode registrar inúmeros fiadores (Garants).
- **Propriedade ↔ Tipo de Propriedade**: Uma Propriedade é classificada sob uma categoria primária (ex: Apartamento, Estúdio, Casa).
