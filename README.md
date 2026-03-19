# LocColoc APP

---
🌎 Languages: [**English**](./README.md) | [Français](./README.fr.md) | [Português (BR)](./README.pt-br.md)
---
Property rental management system built with NestJS and MongoDB.

## 📚 Documentation

Complete documentation is available in the [`/docs`](./docs) directory.

### Quick Links

- **[System Architecture](./docs/ARCHITECTURE.md)** - Monorepo & macro architecture overview
- **[System Use Cases](./docs/USE_CASES.md)** - Visual use case diagrams
- **[ERD Diagram](./docs/ERD_DIAGRAM.md)** - Database entity relationships
- **[Complete Documentation](./docs/README.md)** - Start here for full system overview
- **[API Reference](./docs/api/)** - Detailed endpoint documentation
- **[Database Schemas](./docs/schemas/DATABASE_SCHEMAS.md)** - MongoDB schema reference
- **[Testing Guide](./docs/guides/TESTING.md)** - How to test the API
- **[Rooms-Property Relationship](./docs/guides/ROOMS_PROPERTY_RELATIONSHIP.md)** - Room attachment system

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v16+)
- MongoDB
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your MongoDB connection string

# Run in development mode
npm run start:dev
```

### Environment Variables

```env
MONGODB_URI=mongodb://localhost:27017/loccoloc
PORT=3000
JWT_SECRET=your-secret-key
```

---

## 📖 API Overview

### Resources

| Resource          | Description                        | Documentation                                     |
| ----------------- | ---------------------------------- | ------------------------------------------------- |
| **User**          | Manage tenants, owners, and admins | [User API](./docs/api/USER.md)                    |
| **Property**      | Manage rental properties           | [Property API](./docs/api/PROPERTY.md)            |
| **Rooms**         | Manage individual rental units     | [Rooms API](./docs/api/ROOMS.md)                  |
| **Garant**        | Manage guarantors for tenants      | [Garant API](./docs/api/GARANT.md)                |
| **TypesProperty** | Property type categories           | [TypesProperty API](./docs/api/TYPES_PROPERTY.md) |

### Key Endpoints

```bash
# Users
POST   /user                    # Create user
GET    /user                    # List users
GET    /user/:id                # Get user by ID

# Properties
POST   /property                # Create property (with roomIds)
GET    /property                # List properties
GET    /property/:id            # Get property by ID

# Rooms
POST   /rooms                   # Create room
GET    /rooms/available         # ⭐ Get available rooms (use in frontend)
GET    /rooms                   # List all rooms
PATCH  /rooms/:id/attach/:propId  # Attach room to property
PATCH  /rooms/:id/detach         # Detach room from property

# Garants
POST   /garant                  # Create guarantor
GET    /garant                  # List guarantors

# Property Types
POST   /types-property          # Create property type
GET    /types-property          # List property types
```

---

## 🏗️ System Architecture

Please refer to the detailed [**Architecture Diagram**](./docs/ARCHITECTURE.md), [**Use Cases**](./docs/USE_CASES.md), and [**ERD Database Diagram**](./docs/ERD_DIAGRAM.md) inside the `docs/` folder for comprehensive Mermaid.js diagrams.

Here is a simplified overview:
```
┌─────────────┐
│    User     │
│  (Tenant/   │
│   Owner)    │
└──────┬──────┘
       │ 1:n
┌──────┴──────┐
│   Garant    │
└─────────────┘

┌─────────────┐       ┌──────────────┐
│    User     │ 1:1   │   Property   │
│   (Owner)   ├───────┤              │
└─────────────┘       └──────┬───────┘
                             │ 1:1
                      ┌──────┴────────┐
                      │ TypesProperty │
                      └───────────────┘

┌─────────────┐       ┌──────────────┐
│   Property  │ 1:n   │    Rooms     │
│             ├───────┤              │
└─────────────┘       └──────────────┘
```

---

## ✨ Key Features

### 🔐 User Management

- Multiple user roles (Tenant, Owner, Admin)
- Secure password hashing with bcrypt
- Email validation
- Guarantor support for tenants

### 🏠 Property Management

- Complete property listings
- Property type categorization
- Image support
- Owner association

### 🚪 Room Availability System

- **Unique Feature**: Rooms can only be attached to ONE property
- Automatic availability tracking
- Rooms disappear from available list when attached
- Automatic detachment when property is deleted

### ✅ Data Validation

- Email format validation
- French IBAN (RIB) validation for guarantors
- Business rule enforcement

---

## 📝 Example Usage

### Create a Property with Rooms

```bash
# 1. Get available rooms
curl http://localhost:3000/rooms/available

# 2. Create property with selected rooms
curl -X POST http://localhost:3000/property \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Downtown Apartment",
    "description": "2-bedroom apartment",
    "address": "123 Main St, Paris",
    "surfaceTotal": 80,
    "price": 1500,
    "imagesProperty": ["img1.jpg", "img2.jpg"],
    "roomIds": ["ROOM_ID_1", "ROOM_ID_2"],
    "owner": "USER_ID"
  }'

# 3. Rooms are automatically attached and become unavailable
```

---

## 🧪 Testing

Run the test suite:

```bash
npm test
```

See [Testing Guide](./docs/guides/TESTING.md) for detailed test scenarios.

---

## 📂 Project Structure

```text
loccoloc-monorepo/
├── apps/
│   ├── api/                # NestJS Backend API
│   │   ├── src/
│   │   │   ├── resources/
│   │   │   │   ├── user/           # User management
│   │   │   │   ├── property/       # Property management
│   │   │   │   ├── rooms/          # Room management
│   │   │   │   ├── garant/         # Guarantor management
│   │   │   │   ├── types_property/ # Property types
│   │   │   │   └── support/        # Shared utilities
│   │   │   └── main.ts
│   └── web/                # (Future) Frontend Application
├── libs/                   # (Future) Shared libraries and UI components
├── docs/                   # 📚 Complete documentation & diagrams
│   ├── README.md          # Documentation index
│   ├── ARCHITECTURE.md    # System Architecture Diagram
│   ├── USE_CASES.md       # Use Cases Diagrams
│   ├── ERD_DIAGRAM.md     # Entity-Relationship diagram
│   ├── api/               # API endpoint docs
│   ├── schemas/           # Database schemas
│   └── guides/            # How-to guides
└── README.md              # This file
```

---

## 🛠️ Development

### Running in Development

```bash
npm run start:dev
```

### Building for Production

```bash
npm run build
npm run start:prod
```

### Linting

```bash
npm run lint
```

---

## 📋 Common Workflows

### 1. Onboard New Tenant

```bash
# Create user
POST /user { role: "locataire", ... }

# Create guarantor
POST /garant { ... }

# Link guarantor to user
PATCH /user/:id { garants: [GARANT_ID] }
```

### 2. List New Property

```bash
# Create rooms
POST /rooms { ... }

# Create property with rooms
POST /property { roomIds: [...], ... }
```

### 3. Update Property Rooms

```bash
# Update property with new room IDs
PATCH /property/:id { roomIds: [NEW_IDS] }

# Old rooms are automatically released
# New rooms are automatically attached
```

---

## 🔒 Security Notes

- Passwords are hashed with bcrypt (never stored in plain text)
- Password field is excluded from all queries
- Email uniqueness enforced at database level
- Role-based access control ready (implement in guards)

---

## 📞 Support

For questions or issues:

- Check the [documentation](./docs/README.md)
- Review [API docs](./docs/api/)
- See [testing guide](./docs/guides/TESTING.md)

---

## 📄 License

[Your License Here]

---

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Update documentation
4. Submit pull request

---

## 📚 Additional Resources

- [NestJS Documentation](https://docs.nestjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
