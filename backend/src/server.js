const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const { WebSocketServer } = require('ws');
const http = require('http');

dotenv.config();

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

app.use(cors());
app.use(express.json());

// API Routes
app.post('/api/admin/login', (req, res) => {
  const { senha } = req.body;
  if (senha === process.env.ADMIN_SECRET) {
    const token = jwt.sign({ admin: true }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.json({ token });
  } else {
    res.status(401).json({ erro: 'Senha incorreta' });
  }
});

app.get('/api/admin/dashboard', (req, res) => {
  res.json({
    usuariosAtivos: 47,
    online: 12,
    licoesCompletas: 1284,
    dialogosPraticados: 892,
    xpTotal: 45230
  });
});

app.get('/api/licoes', (req, res) => {
  res.json([
    { id: 1, titulo: 'Breakfast Basic Verbs', descricao: 'Caf da manh e verbos bsicos' },
    { id: 2, titulo: 'Food Meals', descricao: 'Comidas e refeies' },
    { id: 3, titulo: 'Family Hobbies', descricao: 'Famlia e hobbies' },
    { id: 4, titulo: 'Places Activities', descricao: 'Lugares e atividades' },
    { id: 5, titulo: 'Fruits Preferences', descricao: 'Frutas e preferncias' },
    { id: 6, titulo: 'Shopping Clothes', descricao: 'Compras e roupas' },
    { id: 7, titulo: 'Restaurant Food', descricao: 'Restaurante e comida' },
    { id: 8, titulo: 'Travel Hotel', descricao: 'Viagem e hotel' },
    { id: 9, titulo: 'Daily Routine', descricao: 'Rotina diria' },
    { id: 10, titulo: 'Home Garden', descricao: 'Casa e jardim' },
    { id: 11, titulo: 'Questions Answers', descricao: 'Perguntas e respostas' },
    { id: 12, titulo: 'Have, Live, Come', descricao: 'Verbos principais' },
    { id: 13, titulo: 'Do, Make, Visit', descricao: 'Verbos de ao' },
    { id: 14, titulo: 'Restaurant Airport', descricao: 'Restaurante e aeroporto' },
    { id: 15, titulo: 'Travel Hotel', descricao: 'Viagem e hotel' },
    { id: 16, titulo: 'Talk, Speak, Need', descricao: 'Verbos de comunicao' },
    { id: 17, titulo: 'Want, Go, Study', descricao: 'Verbos do dia a dia' }
  ]);
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`The Flow Backend rodando em porta ${PORT}`));
