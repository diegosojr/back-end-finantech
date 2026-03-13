# FinanTech – Backend de Gestão Financeira

## Sobre o Projeto

A **FinanTech** é uma aplicação backend desenvolvida para gerenciamento financeiro pessoal. O sistema permite que usuários registrem **receitas, despesas e metas financeiras**, além de visualizar um **dashboard consolidado** com o resumo das movimentações e o saldo disponível.

O projeto foi desenvolvido como atividade acadêmica com o objetivo de aplicar conceitos fundamentais de **desenvolvimento de APIs modernas**, incluindo:

* Desenvolvimento de **backend para aplicações web**
* **Validação de dados**
* **Relacionamento entre entidades**
* **Autenticação e segurança com JWT**
* Implementação de **interfaces RESTful**
* Implementação de **interface GraphQL**

A aplicação foi construída utilizando **Node.js**, **Express**, **MongoDB** e **Mongoose**, tecnologias amplamente utilizadas no desenvolvimento de APIs escaláveis e modernas.

---

# Objetivo do Sistema

O sistema permite que cada usuário autenticado possa:

* Registrar **receitas financeiras** (salário, freelance, investimentos, etc.)
* Registrar **despesas financeiras**
* Criar **metas financeiras**
* Visualizar um **dashboard com o resumo financeiro**

Todas as operações são vinculadas ao usuário autenticado, garantindo que cada pessoa visualize apenas suas próprias informações.

---

# Arquitetura do Projeto

O backend foi estruturado seguindo uma arquitetura organizada baseada em **camadas**, separando responsabilidades entre rotas, controladores, modelos e configurações.

### Estrutura de pastas

```
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
```

---

# Tecnologias Utilizadas

### Node.js

Ambiente de execução JavaScript utilizado para desenvolvimento do backend.

### Express.js

Framework utilizado para criação das **rotas RESTful da API**, gerenciamento de requisições HTTP e organização do servidor.

### MongoDB

Banco de dados **NoSQL orientado a documentos**, utilizado para armazenamento das informações da aplicação.

### Mongoose

Biblioteca utilizada para modelagem dos dados no MongoDB, permitindo:

* definição de **schemas**
* validação de dados
* relacionamento entre entidades

### JWT (JSON Web Token)

Utilizado para garantir **segurança e autenticação de usuários**.

Após o login, o usuário recebe um **token JWT**, que deve ser enviado nas requisições protegidas para acessar funcionalidades financeiras.

### GraphQL

Interface adicional de consulta de dados que permite:

* consultas mais flexíveis
* criação de transações através de **mutations**
* retorno apenas dos campos necessários

### Express Validator

Utilizado para realizar **validação de dados de entrada**, garantindo integridade e segurança.

### BcryptJS

Biblioteca utilizada para **criptografia de senhas** antes de armazená-las no banco de dados.

---

# Segurança da Aplicação

A segurança da aplicação é implementada através de:

### Criptografia de senha

As senhas são criptografadas utilizando **bcrypt** antes de serem armazenadas no banco.

### Autenticação JWT

Após o login, o sistema gera um token JWT contendo o **ID do usuário autenticado**.

Esse token deve ser enviado no header das requisições protegidas:

```
Authorization: Bearer TOKEN
```

Assim, o sistema consegue identificar qual usuário está realizando a operação.

---

# Entidades do Sistema

### Usuário (User)

Responsável pela autenticação no sistema.

Campos principais:

* name
* email
* password

---

### Transação (Transaction)

Representa uma movimentação financeira.

Pode ser:

* Receita
* Despesa

Campos principais:

* userId
* type
* value
* category
* description
* date

---

### Meta (Goal)

Representa um objetivo financeiro definido pelo usuário.

Campos principais:

* userId
* name
* value
* deadline

---

# Lógica Financeira

O dashboard é calculado automaticamente com base nas informações registradas.

O saldo é calculado da seguinte forma:

```
Saldo = Receitas - Despesas - Metas
```

Ou seja:

* Receitas aumentam o saldo
* Despesas reduzem o saldo
* Metas reservam valores do saldo

---

### Como Executar a Aplicação

#1️. Clonar o Repositório
```
git clone https://github.com/seu-repositorio/finantech.git
```

ou baixar o projeto e abrir no VS Code.

#2️. Acessar a pasta do projeto
```
cd back-end-finantech
```

#3️. Instalar as dependências
```
npm install
```

#4️. Configurar o banco de dados

Certifique-se de que o MongoDB está rodando localmente.

A conexão com o banco está configurada em:
```
src/config/db.js
```

#5️. Executar o servidor

Para iniciar a aplicação execute:
```
node server.js
```

Após iniciar, o terminal exibirá:
```
Servidor rodando na porta 3000
```

#6️. Acessar a API

Base URL da aplicação:
```
http://localhost:3000
```

###Interface GraphQL

O GraphQL pode ser acessado através da URL:
```
http://localhost:3000/graphql
```

O ambiente GraphiQL será exibido para testes das queries e mutations.


# Interfaces da API

O sistema disponibiliza duas formas de interação com os dados:

### API REST

Rotas tradicionais HTTP utilizando métodos como:

* GET
* POST

### API GraphQL

Interface mais flexível para consulta e manipulação de dados através de:

* Queries
* Mutations

---

# Testes da API – FinanTech

## 1️. Autenticação (Usuário)

### Cadastro de Usuário

**Método**

```
POST
```

**URL**

```
http://localhost:3000/users/register
```

**Body (JSON)**

```json
{
  "name": "Desenvolvedor Teste",
  "email": "teste@finantech.com",
  "password": "senha123"
}
```

---

### Login de Usuário

**Método**

```
POST
```

**URL**

```
http://localhost:3000/users/login
```

**Body (JSON)**

```json
{
  "email": "teste@finantech.com",
  "password": "senha123"
}
```

Após o login, será retornado um **token JWT**, que deverá ser utilizado nas próximas requisições.

---

# 2️. Fluxo Financeiro (Requer Token)

Para todas as requisições abaixo, adicionar o header:

```
Authorization: Bearer TOKEN
```

---

### Criar Receita (Salário)

**Método**

```
POST
```

**URL**

```
http://localhost:3000/finance/transaction
```

**Body (JSON)**

```json
{
  "type": "receita",
  "value": 5000,
  "category": "Salario",
  "description": "Salário mensal",
  "date": "2026-03-12"
}
```

---

### Criar Despesa (Aluguel)

**Método**

```
POST
```

**URL**

```
http://localhost:3000/finance/transaction
```

**Body (JSON)**

```json
{
  "type": "despesa",
  "value": 1200,
  "category": "Outros",
  "description": "Aluguel apto",
  "date": "2026-03-12"
}
```

---

### Criar Meta (Reserva)

**Método**

```
POST
```

**URL**

```
http://localhost:3000/finance/goal
```

**Body (JSON)**

```json
{
  "name": "Reserva de Emergência",
  "value": 500,
  "deadline": "2026-12-31"
}
```

---

# 3️. Dashboard e Resumo Financeiro

**Método**

```
GET
```

**URL**

```
http://localhost:3000/finance/dashboard
```

**Header**

```
Authorization: Bearer TOKEN
```

Essa rota retorna o resumo financeiro do usuário contendo:

* Total de receitas
* Total de despesas
* Total de metas
* Saldo final

---

# 4️. Teste GraphQL

**Método**

```
POST
```

**URL**

```
http://localhost:3000/graphql
```

**Header**

```
Authorization: Bearer TOKEN
```

**Body (GraphQL)**

```graphql
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
```

---

# Conclusão

O projeto **FinanTech** demonstra a construção completa de um backend moderno para aplicações web, utilizando boas práticas de desenvolvimento, separação de responsabilidades, autenticação segura e múltiplas interfaces de acesso aos dados.

A aplicação integra conceitos importantes do desenvolvimento backend, como:

* criação de APIs RESTful
* implementação de GraphQL
* autenticação com JWT
* validação de dados
* modelagem de banco de dados
* controle de acesso por usuário

Esses elementos tornam o sistema uma base sólida para aplicações financeiras reais e escaláveis.
