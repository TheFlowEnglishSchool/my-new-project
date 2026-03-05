# Guia de Deploy - The Flow

## Deploy no Railway

O The Flow está configurado para fazer deploy automático no Railway.

### Pré-requisitos

- Conta no Railway (railway.app)
- CLI do Railway instalado
- Credenciais Git configuradas

### Passos para Deploy

1. **Conectar ao Railway**
```bash
railway login
```

2. **Inicializar projeto**
```bash
railway init
```

3. **Configurar variáveis de ambiente**
```bash
railway variables set NODE_ENV=production
railway variables set JWT_SECRET=theflow2025
railway variables set ADMIN_SECRET=suporte2025!
railway variables set DATABASE_URL=postgresql://...
railway variables set REDIS_URL=redis://...
```

4. **Deploy**
```bash
railway up
```

### Acessar a aplicação

- App: https://the-flow.up.railway.app
- Admin: https://the-flow.up.railway.app/admin
- API: https://the-flow.up.railway.app/api
- WebSocket: wss://the-flow.up.railway.app

## Banco de Dados

### PostgreSQL

```sql
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  level VARCHAR(20) DEFAULT 'iniciante',
  avatar TEXT,
  metaDiaria INTEGER DEFAULT 15,
  xp INTEGER DEFAULT 0,
  streak INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE atividades (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES usuarios(id),
  tipo VARCHAR(50),
  lesson_id INTEGER,
  time_spent INTEGER,
  score INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Monitoramento

- Railway logs: `railway logs`
- Métricas: Dashboard do Railway
- Health check: `https://the-flow.up.railway.app/health`
