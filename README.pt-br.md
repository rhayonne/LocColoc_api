---
🌎 Languages: [English](./README.md) | [Français](./README.fr.md) | [**Português (BR)**](./README.pt-br.md)
---

# LocColoc APP

Sistema de gestão de aluguel de imóveis construído com NestJS e MongoDB.

## 📚 Documentação

A documentação completa está disponível no diretório [`/docs`](./docs).

### Links Rápidos

- **[Arquitetura do Sistema](./docs/ARCHITECTURE.pt-br.md)** - Visão geral do Monorepo & arquitetura
- **[Casos de Uso do Sistema](./docs/USE_CASES.pt-br.md)** - Diagramas visuais de casos de uso
- **[Diagrama ERD](./docs/ERD_DIAGRAM.pt-br.md)** - Relacionamentos das entidades do banco de dados
- **[Documentação Completa](./docs/README.md)** - Comece por aqui
- **[Referência da API](./docs/api/)** - Endpoints detalhados
- **[Esquemas de Dados](./docs/schemas/DATABASE_SCHEMAS.md)** - Referência MongoDB
- **[Guia de Testes](./docs/guides/TESTING.md)** - Como testar a API
- **[Relação Quartos-Propriedade](./docs/guides/ROOMS_PROPERTY_RELATIONSHIP.md)** - Regras do sistema

---

## 🚀 Início Rápido

### Pré-requisitos

- Node.js (v16+)
- MongoDB
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Configurar as variáveis de ambiente
cp .env.example .env
# Edite o .env com a string de conexão do seu MongoDB

# Iniciar no modo de desenvolvimento
npm run start:dev
```

### Variáveis de Ambiente

```env
MONGODB_URI=mongodb://localhost:27017/loccoloc
PORT=3000
JWT_SECRET=sua-chave-secreta
```

---

## 📖 Visão Geral da API

### Recursos

| Recurso           | Descrição                                         | Documentação                                      |
| ----------------- | ------------------------------------------------- | ------------------------------------------------- |
| **User**          | Gerir locatários, proprietários e admins          | [API User](./docs/api/USER.md)                    |
| **Property**      | Gerir imóveis                                     | [API Property](./docs/api/PROPERTY.md)            |
| **Rooms**         | Gerir quartos de aluguel individuais              | [API Rooms](./docs/api/ROOMS.md)                  |
| **Garant**        | Gerir fiadores dos locatários                     | [API Garant](./docs/api/GARANT.md)                |
| **TypesProperty** | Categoria dos imóveis                             | [API TypesProperty](./docs/api/TYPES_PROPERTY.md) |

---

## 🏗️ Arquitetura do Sistema

Por favor, consulte [**Diagrama da Arquitetura**](./docs/ARCHITECTURE.pt-br.md), os [**Casos de Uso**](./docs/USE_CASES.pt-br.md), e o [**Diagrama ERD**](./docs/ERD_DIAGRAM.pt-br.md) detalhados dentro da pasta `docs/` para ver diagramas visuais gerados pelo Mermaid.js.

Visão resumida:
```
┌─────────────┐
│   Usuário   │
│(Locatário/  │
│Proprietário)│
└──────┬──────┘
       │ 1:n
┌──────┴──────┐
│   Fiador    │
└─────────────┘

┌─────────────┐       ┌──────────────┐
│   Usuário   │ 1:1   │ Propriedade  │
│(Proprietário├───────┤              │
└─────────────┘       └──────┬───────┘
                             │ 1:1
                      ┌──────┴────────┐
                      │ Tipo Imóvel   │
                      └───────────────┘

┌─────────────┐       ┌──────────────┐
│ Propriedade │ 1:n   │   Quartos    │
│             ├───────┤              │
└─────────────┘       └──────────────┘
```

---

## ✨ Principais Funcionalidades

### 🔐 Gestão de Usuários
- Múltiplos papéis (Locatário, Proprietário, Administrador)
- Hash seguro de senhas com bcrypt
- Suporte a múltiplos Fiadores para locatários

### 🏠 Gestão de Imóveis
- Catálogo de propriedades
- Categorização flexível por tipos de imóveis
- Fluxos conectados aos proprietários do imóvel

### 🚪 Sistema de Disponibilidade de Quartos
- **Regra Única**: Um Quarto só pode ser anexado a UMA ÚNICA propriedade
- Os quartos somem da lista de "disponíveis" logo que atrelados.

---

## 📝 Exemplo de Uso

### Criar Propriedade e atrelar quartos

```bash
# 1. Obter quartos disponíveis
curl http://localhost:3000/rooms/available

# 2. Criar a propriedade contendo esses IDs de quarto
curl -X POST http://localhost:3000/property \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Apartamento no Centro",
    "description": "Apto de 2 quartos incrível",
    "address": "123 Rua Principal, São Paulo",
    "surfaceTotal": 80,
    "price": 1500,
    "roomIds": ["ID_DO_QUARTO_1", "ID_DO_QUARTO_2"],
    "owner": "USER_ID"
  }'
```

---

## 📂 Estrutura do Projeto

```text
loccoloc-monorepo/
├── apps/
│   ├── api/                # NestJS Backend API
│   │   ├── src/
│   │   │   ├── resources/
│   │   │   │   ├── user/           # Gestão de Usuário
│   │   │   │   ├── property/       # Gestão de Propriedades
│   │   │   │   ├── rooms/          # Gestão de Quartos
│   │   │   │   ├── garant/         # Fiadores
│   │   │   │   ├── types_property/ # Tipologias
│   │   │   │   └── support/        # Utilitários compartilhados
│   │   │   └── main.ts
│   └── web/                # (Futuro) Frontend App
├── libs/                   # (Futuro) Bibliotecas e pacotes
├── docs/                   # 📚 Documentação detalhada e Diagramas
└── README.pt-br.md         # Este arquivo
```
