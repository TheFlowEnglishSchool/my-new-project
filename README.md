# THE FLOW - App de Aprendizado de Ingls

Aplicativo completo de aprendizado de ingls baseado no livro "English by Lorreine Gall - Level 1"

## Caractersticas

- 17 lices completas
- Flashcards interativos com udio
- Dilogos realistas com grias naturais
- Quizzes gamificados
- Sistema de perfil personalizado
- Painel admin exclusivo em tempo real
- PWA (Progressive Web App) - funciona offline
- Streak de estudos e sistema de XP
- Conquistas e badges

## Tecnologias

- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express
- **Banco de Dados**: PostgreSQL
- **Cache**: Redis
- **Tempo Real**: WebSocket
- **Deploy**: Railway

## Estrutura do Projeto

```
the-flow/
├── backend/          # Servidor Express
│   ├── src/
│   │   ├── server.js
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── models/
│   └── package.json
├── frontend/         # Aplicativo React
│   ├── src/
│   ├── public/
│   └── package.json
├── docs/            # Documentao
├── Dockerfile
└── docker-compose.yml
```

## Instalao Local

### Backend

```bash
cd backend
npm install
cp .env.example .env
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Deploy no Railway

```bash
railway login
railway init
railway up
```

## Acesso Admin

- URL: https://the-flow.up.railway.app/admin
- Senha: suporte2025!

## Licoes Disponveis

1. Breakfast & Basic Verbs
2. Food & Meals
3. Family & Hobbies
4. Places & Activities
5. Fruits & Preferences
6. Shopping & Clothes
7. Restaurant & Food
8. Travel & Hotel
9. Daily Routine & Time
10. Home & Garden
11. Questions & Answers
12. Have, Live, Come, Stay
13. Do, Make, Visit, Cook
14. Restaurant & Airport
15. Travel & Hotel
16. Talk, Speak, Need, Eat
17. Want, Go, Study, Work

## Autores

TheFlowEnglishSchool

## Licena

Proprietary - Todos os direitos reservados
