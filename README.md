# FinanTech – Backend de Gestão Financeira

## Sobre o Projeto

A **FinanTech** é uma aplicação backend desenvolvida para gerenciamento financeiro pessoal. O sistema permite que usuários registrem **receitas, despesas e metas financeiras**, além de visualizar um **dashboard consolidado** com o resumo das movimentações e o saldo disponível.

---

## Como executar a aplicação

Para rodar o projeto localmente, siga os passos abaixo:

1.  **Instale as dependências:**
    ```bash
    npm install
    ```
2.  **Certifique-se de que o MongoDB está rodando** em sua máquina.
3.  **Inicie o servidor:**
    ```bash
    npm start
    ```
    O servidor estará disponível em `http://localhost:3000`.

---

# Arquitetura do Projeto

O backend foi estruturado separando responsabilidades entre rotas, controladores, modelos e configurações.

### Estrutura de pastas (Atualizada)

back end - finantech
│
├── src
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   ├── userController.js
│   │   └── financeController.js
│   ├── graphql
│   │   ├── schema.js
│   │   └── resolvers.js
│   ├── middlewares
│   │   └── auth.js
│   ├── models
│   │   ├── User.js
│   │   ├── Transaction.js
│   │   └── Goal.js
│   └── routes
│       ├── userRoutes.js
│       └── financeRoutes.js
│
├── server.js
├── package.json
├── .gitignore
└── README.md

---

# Tecnologias Utilizadas

* **Node.js & Express**: Servidor e rotas RESTful.
* **MongoDB & Mongoose**: Banco de dados e modelagem.
* **JWT (JSON Web Token)**: Autenticação segura.
* **GraphQL**: Interface flexível para consultas e mutations.
* **BcryptJS**: Criptografia de senhas.

---

# Segurança e Autenticação

A aplicação utiliza **JWT**. Após o login, o usuário recebe um token que deve ser enviado no header de todas as requisições protegidas:

Authorization: Bearer TOKEN_AQUI


---

# Testes da API – FinanTech

### 1. Cadastro de Usuário
`POST http://localhost:3000/users/register`

### 2. Login de Usuário
`POST http://localhost:3000/users/login`

### 3. Criar Receita (Requer Token)
`POST http://localhost:3000/finance/transaction`
```json
{
  "type": "receita",
  "value": 5000,
  "category": "Salario",
  "description": "Salário mensal",
  "date": "2026-03-12"
}
4. Dashboard Financeiro
GET http://localhost:3000/finance/dashboard

Teste GraphQL
Endpoint: http://localhost:3000/graphql

Exemplo de Mutation:

GraphQL
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

### Conclusão
O projeto FinanTech demonstra a construção completa de um backend moderno, integrando APIs REST e GraphQL com autenticação segura e persistência em banco de dados NoSQL.
