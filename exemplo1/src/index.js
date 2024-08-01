// src/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const checkRole = require('./app/middleware/authMiddleware');
const ROLES = require('./app/utils/roles');

// Configurar CORS
app.use(cors());

// Middleware para simular um usuário autenticado
app.use((req, res, next) => {
  req.user = { role: ROLES.ADMIN }; // Mude para ROLES.ADMIN para testar como um administrador
  next();
});

app.get('/admin', checkRole([ROLES.ADMIN]), (req, res) => {
  res.send('Welcome Admin');
});

app.get('/user', checkRole([ROLES.USER, ROLES.ADMIN]), (req, res) => {
  res.send('Welcome User');
});

app.get('/all', checkRole([ROLES.ADMIN]), (req, res) => {
  res.send('Welcome All Users');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
