FinanTech – Backend de Gestão Financeira
📌 Sobre o Projeto

O FinanTech é uma API backend desenvolvida para gerenciamento financeiro pessoal. A aplicação permite que usuários registrem receitas, despesas e metas financeiras, além de visualizar um dashboard consolidado com o resumo das movimentações financeiras.

O projeto foi desenvolvido com o objetivo de aplicar conceitos fundamentais de desenvolvimento de backend para aplicações web, incluindo:

Validação de dados

Relacionamento entre entidades

Autenticação e segurança utilizando JWT

Implementação de API RESTful

Implementação de interface GraphQL

A aplicação foi construída utilizando Node.js, Express, MongoDB e Mongoose, tecnologias amplamente utilizadas no desenvolvimento de APIs modernas.

🎯 Funcionalidades do Sistema

A API permite que usuários autenticados possam:

Criar conta no sistema

Fazer login e receber um token JWT

Registrar receitas financeiras

Registrar despesas financeiras

Criar metas financeiras

Visualizar um dashboard financeiro consolidado

Realizar operações através de REST API e GraphQL

Todas as operações financeiras são vinculadas ao usuário autenticado.

🧱 Estrutura do Projeto

A aplicação segue uma arquitetura modular organizada por responsabilidades.

back-end-finantech
│
├── node_modules
│
├── src
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   ├── financeController.js
│   │   └── userController.js
│   │
│   ├── graphql
│   │   ├── schema.js
│   │   └── resolvers.js
│   │
│   ├── middlewares
│   │   └── auth.js
│   │
│   ├── models
│   │   ├── Goal.js
│   │   ├── Transaction.js
│   │   └── User.js
│   │
│   ├── routes
│   │   ├── financeRoutes.js
│   │   └── userRoutes.js
│
├── server.js
├── package.json
├── package-lock.json
└── .gitignore
⚙️ Tecnologias Utilizadas
Node.js

Ambiente de execução JavaScript utilizado para o backend.

Express.js

Framework responsável pela criação das rotas da API REST.

MongoDB

Banco de dados NoSQL utilizado para armazenamento das informações.

Mongoose

Biblioteca utilizada para modelagem de dados e interação com o MongoDB.

JSON Web Token (JWT)

Responsável pela autenticação e segurança das rotas protegidas da API.

GraphQL

Interface adicional para manipulação e consulta de dados com maior flexibilidade.

BcryptJS

Utilizado para criptografia de senhas antes de serem armazenadas no banco de dados.

🔐 Autenticação e Segurança

O sistema utiliza JWT (JSON Web Token) para autenticação.

Após realizar login, o usuário recebe um token que deve ser enviado nas requisições protegidas.

Exemplo de Header:

Authorization: Bearer TOKEN

Esse token permite que o sistema identifique qual usuário está realizando as operações financeiras.

🧩 Entidades do Sistema
Usuário (User)

Responsável pelo acesso ao sistema.

Campos principais:

name

email

password

Transação (Transaction)

Representa uma movimentação financeira.

Campos principais:

userId

type (receita ou despesa)

value

category

description

date

Meta (Goal)

Representa um objetivo financeiro do usuário.

Campos principais:

userId

name

value

deadline

📊 Lógica Financeira do Dashboard

O dashboard financeiro calcula automaticamente:

Saldo = Receitas - Despesas - Metas

Ou seja:

Receitas aumentam o saldo

Despesas reduzem o saldo

Metas representam valores reservados

🚀 Como Executar a Aplicação
1️⃣ Clonar o Repositório
git clone https://github.com/seu-repositorio/finantech.git

ou baixar o projeto e abrir no VS Code.

2️⃣ Acessar a pasta do projeto
cd back-end-finantech
3️⃣ Instalar as dependências
npm install
4️⃣ Configurar o banco de dados

Certifique-se de que o MongoDB está rodando localmente.

A conexão com o banco está configurada em:

src/config/db.js
5️⃣ Executar o servidor

Para iniciar a aplicação execute:

node server.js

Após iniciar, o terminal exibirá:

Servidor rodando na porta 3000
6️⃣ Acessar a API

Base URL da aplicação:

http://localhost:3000
🌐 Interface GraphQL

O GraphQL pode ser acessado através da URL:

http://localhost:3000/graphql

O ambiente GraphiQL será exibido para testes das queries e mutations.

🧪 Testes da API – FinanTech
1️⃣ Autenticação (Usuário)
Cadastro de Usuário

POST

http://localhost:3000/users/register

Body:

{
  "name": "Desenvolvedor Teste",
  "email": "teste@finantech.com",
  "password": "senha123"
}
Login de Usuário

POST

http://localhost:3000/users/login

Body:

{
  "email": "teste@finantech.com",
  "password": "senha123"
}

Retorno esperado:

token JWT
2️⃣ Fluxo Financeiro (Requer Token)

Adicionar no Header:

Authorization: Bearer TOKEN
Criar Receita

POST

http://localhost:3000/finance/transaction

Body:

{
  "type": "receita",
  "value": 5000,
  "category": "Salario",
  "description": "Salário mensal",
  "date": "2026-03-12"
}
Criar Despesa

POST

http://localhost:3000/finance/transaction

Body:

{
  "type": "despesa",
  "value": 1200,
  "category": "Outros",
  "description": "Aluguel apto",
  "date": "2026-03-12"
}
Criar Meta

POST

http://localhost:3000/finance/goal

Body:

{
  "name": "Reserva de Emergência",
  "value": 500,
  "deadline": "2026-12-31"
}
3️⃣ Dashboard Financeiro

GET

http://localhost:3000/finance/dashboard

Header:

Authorization: Bearer TOKEN

Retorno esperado:

Total de receitas

Total de despesas

Total de metas

Saldo final

4️⃣ Teste GraphQL

POST

http://localhost:3000/graphql

Body:

mutation {
  createTransaction(input: {
    type: "receita",
    value: 200,
    category: "Freelance",
    description: "Job extra",
    date: "2026-03-12"
  }) {
    _id
    value
    type
  }
}
📌 Conclusão

O FinanTech demonstra a implementação de um backend completo utilizando boas práticas de desenvolvimento, autenticação segura e múltiplas interfaces de acesso aos dados.

O projeto integra conceitos essenciais do desenvolvimento backend moderno, como:

APIs RESTful

GraphQL

Autenticação com JWT

Validação de dados

Modelagem de banco de dados com MongoDB

Organização modular do código

✅ Esse README agora resolve exatamente os pontos que sua professora citou:

✔ explica como executar a aplicação
✔ mostra a estrutura correta do projeto
✔ considera middlewares dentro de src
✔ usa .gitignore
✔ documenta REST + GraphQL
