---
🌎 Languages: [English](./ARCHITECTURE.md) | [Français](./ARCHITECTURE.fr.md) | [**Português (BR)**](./ARCHITECTURE.pt-br.md)
---

# 🏗️ Arquitetura do Sistema LocColoc

Este documento descreve a arquitetura de alto nível do sistema LocColoc.

## 📦 Estrutura do Workspace Monorepo

O LocColoc usa uma configuração monorepo gerenciada através de espaços de trabalho (workspaces) padrão do gerenciador de pacotes.

```mermaid
graph TD
    Root[LocColoc Monorepo] --> Apps[apps/]
    Root --> Libs[libs/]
    
    %% Defined Workspaces
    Apps --> API[api / Backend NestJS]
    Apps --> Web[web / Frontend - Futuro]
    Apps --> Mobile[mobile / React Native - Futuro]
    
    Libs --> Shared[shared-types - Futuro]
    Libs --> UI[ui-components - Futuro]

    %% Internal relationships
    Web -.->|Utiliza| UI
    Web -.->|Utiliza| Shared
    Mobile -.->|Utiliza| Shared
    API -.->|Utiliza| Shared
```

## 🔌 Arquitetura da API (Backend)

O backend (`apps/api`) é construído em **NestJS** e segue uma arquitetura modular orientada ao domínio, expondo endpoints RESTful.

```mermaid
graph LR
    Client((Clientes: Web/Mobile)) -.->|HTTP REST| API_Gateway
    
    subgraph "Aplicação NestJS (apps/api)"
        API_Gateway[Controladores / Roteamento]
        
        API_Gateway --> AuthModule[Módulo Auth]
        
        API_Gateway --> UserModule[Módulo Usuário]
        API_Gateway --> PropertyModule[Módulo Propriedade]
        API_Gateway --> RoomsModule[Módulo Quartos]
        API_Gateway --> GarantModule[Módulo Fiador]
        API_Gateway --> ContractModule[Módulo Contrato]
        
        UserModule --> Services[Serviços de Negócios]
        PropertyModule --> Services
        RoomsModule --> Services
        
        Services --> DB_Connection[(Mongoose ODM / MongoDB)]
    end
```

## ⚙️ Comportamentos Principais do Sistema

1. **Autenticação & Autorização**: Gerenciadas centralmente via módulo Auth. Os usuários devem estar autenticados para interagir com os recursos.
2. **Sistema de Anexação de Quartos**: Um recurso único onde um `Room` (Quarto) é fixado exclusivamente a apenas uma `Property` (Propriedade). Uma vez associado, não pode ser reutilizado até ser desvinculado.
3. **Fluxos baseados em Funções (Role-Based)**: Existem fluxos de trabalho distintos dependendo se o usuário autenticado é um `Proprietário` (Owner), `Locatário` (Tenant) ou `Admin`.
