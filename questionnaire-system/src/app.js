const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/index.js');

const app = express();
const PORT = process.env.PORT || 3000;
const mongUrl = 'mongodb+srv://testemongo:mSGS2pnx5Xgoa1Fu@cluster0.s1s8p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Configuração do body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexão com o banco de dados MongoDB
mongoose.connect(mongUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch(err => {
  console.error('Erro ao conectar ao MongoDB', err);
});

// Configuração das rotas
app.use('/api', routes);

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});