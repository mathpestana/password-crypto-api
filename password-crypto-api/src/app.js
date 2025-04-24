const express = require('express');
const cors = require('cors');
const passwordRoutes = require('./routes/passwordRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/password', passwordRoutes);

// Rota raiz
app.get('/', (req, res) => {
  res.json({
    message: 'Bem-vindo à API de Criptografia de Senhas',
    version: '1.0.0',
    endpoints: {
      encrypt: '/api/password/encrypt',
      validate: '/api/password/validate',
      generate: '/api/password/generate'
    }
  });
});

// Middleware para rotas não encontradas
app.use((req, res) => {
  res.status(404).json({ 
    success: false,
    message: 'Rota não encontrada' 
  });
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Erro interno do servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

module.exports = app;