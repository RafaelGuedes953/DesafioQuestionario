# Descrição do Sistema de Controle de Questionários

## Visão Geral
O sistema de controle de questionários é uma aplicação desenvolvida em Node.js que permite gerenciar a criação, distribuição e análise de questionários. O objetivo é fornecer uma plataforma eficiente para que usuários possam criar questionários personalizados, coletar respostas e analisar os dados obtidos.

## Estrutura do Projeto
O projeto é organizado da seguinte forma:

- **src/app.js**: Ponto de entrada da aplicação, onde o servidor Node.js é inicializado e as rotas são configuradas.
- **src/controllers/index.js**: Contém a classe `IndexController`, responsável por gerenciar as requisições relacionadas aos questionários.
- **src/models/index.js**: Define os modelos de dados utilizados, incluindo o modelo de Questionário e métodos para interagir com o banco de dados.
- **src/routes/index.js**: Configura as rotas da aplicação, mapeando as requisições HTTP para os métodos do `IndexController`.
- **src/services/index.js**: Contém a lógica de negócios da aplicação, incluindo funções para manipulação de dados e geração de relatórios.

## Funcionalidades Principais
1. **Criação de Questionários**: Interface para criar questionários com diferentes tipos de perguntas.
2. **Distribuição de Questionários**: Envio de questionários via e-mail ou link compartilhável.
3. **Coleta de Respostas**: Interface amigável para os respondentes preencherem os questionários.
4. **Análise de Dados**: Ferramentas para visualizar e analisar as respostas coletadas.
5. **Gerenciamento de Usuários**: Sistema de autenticação e autorização para garantir a segurança dos dados.

## Instalação
Para instalar as dependências do projeto, execute o seguinte comando na raiz do projeto:

```
npm install
```

## Execução
Para iniciar o servidor, utilize o comando:

```
npm start
```

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença
Este projeto está licenciado sob a MIT License.