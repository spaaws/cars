const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Array para armazenar os carros
const carros = [];

// Endpoint para listar todos os carros
app.get('/carros', (req, res) => {
  res.json(carros);
});

// Endpoint para cadastrar um novo carro
app.post('/carros', (req, res) => {
  const novoCarro = req.body;
  carros.push(novoCarro);
  res.status(201).json(novoCarro);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
