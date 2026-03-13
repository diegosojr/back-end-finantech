const Transaction = require("../models/Transaction");
const Goal = require("../models/Goal");

exports.createTransaction = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("USER ID NO CONTROLLER:", req.userId);

    const { type, value, category, description, date } = req.body;

    const transaction = new Transaction({
      userId: req.userId,
      type,
      value,
      category,
      description,
      date
    });

    await transaction.save();

    res.status(201).json(transaction);
  } catch (error) {
    console.log("ERRO CREATE TRANSACTION:");
    console.log(error);
    res.status(500).json({
      error: "Erro ao criar transação",
      details: error.message
    });
  }
};

exports.createGoal = async (req, res) => {
  try {
    console.log("USER ID NO CONTROLLER:", req.userId);

    const { name, value, deadline } = req.body;

    const goal = new Goal({
      userId: req.userId,
      name,
      value,
      deadline
    });

    await goal.save();

    res.status(201).json(goal);
  } catch (error) {
    console.log("ERRO CREATE GOAL:");
    console.log(error);
    res.status(500).json({
      error: "Erro ao criar meta",
      details: error.message
    });
  }
};

exports.getDashboard = async (req, res) => {
  try {
    console.log("USER ID NO DASHBOARD:", req.userId);

    const receitas = await Transaction.aggregate([
      { $match: { userId: req.userId, type: "receita" } },
      { $group: { _id: null, total: { $sum: "$value" } } }
    ]);

    const despesas = await Transaction.aggregate([
      { $match: { userId: req.userId, type: "despesa" } },
      { $group: { _id: null, total: { $sum: "$value" } } }
    ]);

    const metas = await Goal.aggregate([
      { $match: { userId: req.userId } },
      { $group: { _id: null, total: { $sum: "$value" } } }
    ]);

    const totalReceitas = receitas[0]?.total || 0;
    const totalDespesas = despesas[0]?.total || 0;
    const totalMetas = metas[0]?.total || 0;
    const saldo = totalReceitas - totalDespesas - totalMetas;

    res.json({
      receitas: totalReceitas,
      despesas: totalDespesas,
      metas: totalMetas,
      saldo
    });
  } catch (error) {
    console.log("ERRO DASHBOARD:");
    console.log(error);
    res.status(500).json({
      error: "Erro ao buscar dashboard",
      details: error.message
    });
  }
};