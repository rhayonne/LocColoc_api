---
🌎 Languages: [English](./ARCHITECTURE.md) | [**Français**](./ARCHITECTURE.fr.md) | [Português (BR)](./ARCHITECTURE.pt-br.md)
---

# 🏗️ Architecture du Système LocColoc

Ce document décrit l'architecture globale du système LocColoc.

## 📦 Structure du Workspace Monorepo

LocColoc utilise une configuration monorepo gérée via des espaces de travail standards de gestionnaire de paquets (workspaces).

```mermaid
graph TD
    Root[LocColoc Monorepo] --> Apps[apps/]
    Root --> Libs[libs/]
    
    %% Defined Workspaces
    Apps --> API[api / Backend NestJS]
    Apps --> Web[web / Frontend - Futur]
    Apps --> Mobile[mobile / React Native - Futur]
    
    Libs --> Shared[shared-types - Futur]
    Libs --> UI[ui-components - Futur]

    %% Internal relationships
    Web -.->|Utilise| UI
    Web -.->|Utilise| Shared
    Mobile -.->|Utilise| Shared
    API -.->|Utilise| Shared
```

## 🔌 Architecture de l'API (Backend)

Le backend (`apps/api`) est construit sur **NestJS** et suit une architecture modulaire et orientée domaine, exposant des points d'accès RESTful.

```mermaid
graph LR
    Client((Clients: Web/Mobile)) -.->|HTTP REST| API_Gateway
    
    subgraph "Application NestJS (apps/api)"
        API_Gateway[Contrôleurs / Routage]
        
        API_Gateway --> AuthModule[Module Auth]
        
        API_Gateway --> UserModule[Module Utilisateur]
        API_Gateway --> PropertyModule[Module Propriété]
        API_Gateway --> RoomsModule[Module Chambres]
        API_Gateway --> GarantModule[Module Garant]
        API_Gateway --> ContractModule[Module Contrat]
        
        UserModule --> Services[Services Métier]
        PropertyModule --> Services
        RoomsModule --> Services
        
        Services --> DB_Connection[(Mongoose ODM / MongoDB)]
    end
```

## ⚙️ Comportements Principaux du Système

1. **Authentification & Autorisation** : Gérées centralement via le module Auth. Les utilisateurs doivent être authentifiés pour interagir avec les ressources.
2. **Système d'Attachement de Chambre** : Une fonctionnalité unique où une `Room` (Chambre) est exclusivement attachée à une seule `Property` (Propriété). Une fois attachée, elle ne peut pas être réutilisée avant d'être détachée.
3. **Flux basés sur les Rôles** : Des flux de travail distincts existent selon que l'utilisateur authentifié est un `Propriétaire` (Owner), un `Locataire` (Tenant) ou un `Admin`.
