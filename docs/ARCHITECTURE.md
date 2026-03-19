---
🌎 Languages: [**English**](./ARCHITECTURE.md) | [Français](./ARCHITECTURE.fr.md) | [Português (BR)](./ARCHITECTURE.pt-br.md)
---

# 🏗️ LocColoc System Architecture
This document describes the high-level architecture of the LocColoc system.

## 📦 Monorepo Workspace Structure

LocColoc uses a monorepo setup managed via standard package manager workspaces. 

```mermaid
graph TD
    Root[LocColoc Monorepo] --> Apps[apps/]
    Root --> Libs[libs/]
    
    %% Defined Workspaces
    Apps --> API[api / NestJS Backend]
    Apps --> Web[web / Frontend - Future]
    Apps --> Mobile[mobile / React Native - Future]
    
    Libs --> Shared[shared-types - Future]
    Libs --> UI[ui-components - Future]

    %% Internal relationships
    Web -.->|Uses| UI
    Web -.->|Uses| Shared
    Mobile -.->|Uses| Shared
    API -.->|Uses| Shared
```

## 🔌 API Architecture (Backend)

The backend (`apps/api`) is built on **NestJS** and follows a modular, resource-driven domain architecture, exposing RESTful endpoints.

```mermaid
graph LR
    Client((Clients: Web/Mobile)) -.->|HTTP REST| API_Gateway
    
    subgraph "NestJS Application (apps/api)"
        API_Gateway[Controllers / Routing]
        
        API_Gateway --> AuthModule[Auth Module]
        
        API_Gateway --> UserModule[User Module]
        API_Gateway --> PropertyModule[Property Module]
        API_Gateway --> RoomsModule[Rooms Module]
        API_Gateway --> GarantModule[Garant Module]
        API_Gateway --> ContractModule[Contract Module]
        
        UserModule --> Services[Business Services]
        PropertyModule --> Services
        RoomsModule --> Services
        
        Services --> DB_Connection[(Mongoose ODM / MongoDB)]
    end
```

## ⚙️ Core System Behaviors

1. **Authentication & Authorization**: Handled centrally via the Auth module. Users must be authenticated to interact with resources.
2. **Room Attachment System**: A unique feature where a `Room` is uniquely attached to a single `Property`. Once attached, it cannot be reused until detached.
3. **Role-Based Workflows**: Distinct workflows exist depending on whether the authenticated User is an `Owner`, `Tenant` (Locataire), or `Admin`.
