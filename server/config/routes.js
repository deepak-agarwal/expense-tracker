const express = require("express");
const router = express.Router();
const department = require("../app/controller/departmentController");
const employee = require("../app/controller/employeeController");
const category = require("../app/controller/categoryController");
const expense = require("../app/controller/expenseController");
const middlewareAuth = require("../app/middleware/authentication");
const splitExpanse = require('../app/middleware/splitExpanse')

router.post("/register", employee.create);
router.get("/employees", employee.list);
router.post("/login", employee.login);
router.delete("/logout", middlewareAuth.authenticateUser, employee.logout);

router.get("/departments", department.list);
router.post("/departments", department.create);

router.get("/categories", category.list);
router.post("/categories", category.create);

router.get("/expenses", expense.list);
router.post("/addExpenses", middlewareAuth.authenticateUser, expense.addExpense,splitExpanse.splitExpanse);
router.post("/addExpensesVariable", middlewareAuth.authenticateUser, expense.addExpense,splitExpanse.variableSplitExpanse);


module.exports = router;