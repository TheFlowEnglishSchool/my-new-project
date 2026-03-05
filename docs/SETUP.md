# Setup Local - The Flow

## Prerequisites

- Node.js 18+
- Docker Desktop
- Git

## Instalao rápida com Docker

```bash
docker-compose up -d
```

Isso vai:
- Criar banco PostgreSQL
- Criar Redis
- Rodar backend Express

## Instalao Manual

### 1. Backend

```bash
cd backend
npm install
npm start
```

### 2. Frontend (novo terminal)

```bash
cd frontend
npm install
npm run dev
```

Acesse http://localhost:5173

## Variáveis de Ambiente

### Backend (.env)
```
PORT=3001
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/theflow
REDIS_URL=redis://localhost:6379
JWT_SECRET=dev_secret
ADMIN_SECRET=admin123
```

### PostgreSQL
```sql
psql postgresql://user:password@localhost:5432/theflow
\i backend/db/schema.sql
```
