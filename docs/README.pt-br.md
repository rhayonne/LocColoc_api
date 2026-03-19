# 📚 Índice da Documentação

---
🌎 Languages: [English](./README.md) | [Français](./README.fr.md) | [**Português (BR)**](./README.pt-br.md)
---

Bem-vindo à documentação do App LocColoc! Este diretório contém a documentação completa para todos os aspectos do sistema.

---

## 📖 Estrutura da Documentação

```text
docs/
├── README.pt-br.md                    # Este arquivo - Índice da documentação
├── ARCHITECTURE.pt-br.md              # 🏗️ Arquitetura do Sistema & Monorepo
├── USE_CASES.pt-br.md                 # 👥 Casos de Uso
├── ERD_DIAGRAM.pt-br.md               # 🗄️ Diagrama ERD de Banco de Dados
├── api/                               # Endpoints da API (Em Inglês)
│   ├── USER.md                       # API de Usuário
│   ├── PROPERTY.md                   # API de Propriedades
│   ├── ROOMS.md                      # API de Quartos
│   ├── GARANT.md                     # API de Fiadores
│   └── TYPES_PROPERTY.md             # API de Tipos de Imóvel
├── schemas/                           # Esquemas do MongoDB (Em Inglês)
│   └── DATABASE_SCHEMAS.md           # Referência dos bancos
└── guides/                            # Guias (Em Inglês)
    ├── ROOMS_PROPERTY_RELATIONSHIP.md # Como anexar quartos a imóveis
    └── TESTING.md                     # Guia de testes da API
```

---

## 🚀 Como Começar

### Novo no projeto?
1. Comece pelo [README Principal](../README.pt-br.md) para início rápido.
2. Leia a [Visão Geral do Sistema](#-visão-geral-do-sistema) abaixo.

### Procurando por algo específico?
- **Arquitetura**: Veja o [Diagrama de Arquitetura](./ARCHITECTURE.pt-br.md)
- **Papéis / Usuários**: Veja os [Casos de Uso](./USE_CASES.pt-br.md)
- **Estrutura de Banco**: Veja o [Diagrama ERD](./ERD_DIAGRAM.pt-br.md)

---

## 📋 Visão Geral do Sistema

### O que é o LocColoc?
O LocColoc é um app de gestão e locação imobiliária que gerencia:
- **Gestão de Usuários**: Inquilinos, proprietários e administradores.
- **Gestão de Imóveis (Properties)**: Cadastro completo com imagens.
- **Quartos (Rooms)**: Unidades fracionadas com sistema de disponibilidade.
- **Fiadores (Garants)**: Garantias financeiras de locatários.

### Principais Funcionalidades
✅ **Sistema de papéis** (Locatário, Proprietário, Admin)
✅ **Autenticação Segura** (Senha hasheada com bcrypt)
✅ **Sistema Restrito de Quartos** (Evita reservas duplas)
✅ **Relacionamentos Automáticos** (Quartos ↔ Imóveis)

---

## 📚 Documentação da API

*Nota: Os arquivos da API abaixo estão em inglês para alinhar com o código e ferramentas.*

- 👤 **[API User](./api/USER.md)** - Gestão e criação de usuários.
- 🏠 **[API Property](./api/PROPERTY.md)** - Locações e associação de proprietários.
- 🚪 **[API Rooms](./api/ROOMS.md)** - Como criar / listar quartos livres.
- 👨‍👩‍👧 **[API Garant](./api/GARANT.md)** - Cadastro de fiadores, validação de e-mail/Iban.
- 🏢 **[API TypesProperty](./api/TYPES_PROPERTY.md)** - Gerenciamento de tipos de propriedade.

---

## 🔍 Referência Rápida

### Papéis de Usuário (Roles)
| Papel (Role) | Valor          | Descrição                 |
| ------------ | -------------- | ------------------------- |
| Inquilino    | `locataire`    | Aluga propriedades        |
| Proprietário | `proprietaire` | Dono das propriedades     |
| Admin        | `super_admin`  | Administrador do sistema  |

### 📞 Precisa de Ajuda?
Leia os [Guias completos em Inglês](./guides/) ou rode os testes `npm test` para debugar.
