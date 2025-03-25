const mongoose = require('mongoose');
const { Questionnaire } = require('./models/index.js');

const seedData = [
  {
    title: 'Questionário de Satisfação',
    questions: [
      {
        questionText: 'Como você avalia nosso serviço?',
        questionType: 'scale',
        options: ['1', '2', '3', '4', '5']
      },
      {
        questionText: 'O que podemos melhorar?',
        questionType: 'open_ended',
        options: []
      }
    ]
  },
  {
    title: 'Pesquisa de Mercado',
    questions: [
      {
        questionText: 'Qual é a sua faixa etária?',
        questionType: 'multiple_choice',
        options: ['18-25', '26-35', '36-45', '46-60', '60+']
      },
      {
        questionText: 'Você recomendaria nosso produto?',
        questionType: 'multiple_choice',
        options: ['Sim', 'Não']
      }
    ]
  }
];

mongoose.connect('mongodb://localhost:27017/questionnaire-system', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('Conectado ao MongoDB');
  await Questionnaire.deleteMany({});
  await Questionnaire.insertMany(seedData);
  console.log('Dados de exemplo inseridos');
  mongoose.disconnect();
}).catch(err => {
  console.error('Erro ao conectar ao MongoDB', err);
});