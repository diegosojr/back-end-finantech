const express = require("express");
const conectdb = require("./src/config/db");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./src/graphql/schema");
const resolvers = require("./src/graphql/resolvers");
const authMiddleware = require("./middlewares/auth"); 

const app = express();
conectdb();
app.use(express.json());

app.use("/graphql", authMiddleware, graphqlHTTP((req) => ({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
  context: { userId: req.userId } 
})));

const userRoutes = require("./src/routes/userRoutes");
const financeRoutes = require("./src/routes/financeRoutes");

app.use("/users", userRoutes);
app.use("/finance", financeRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));