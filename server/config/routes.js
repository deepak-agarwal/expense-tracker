const express = require("express");
const router = express.Router();
const department = require("../app/controller/departmentController");
const employee = require("../app/controller/employeeController");
const category = require("../app/controller/categoryController");
const expense = require("../app/controller/expenseController");
const {authenticateUser,authoriseUser} = require("../app/middleware/authentication");
const splitExpanse = require('../app/middleware/splitExpanse')

router.post("/register", employee.create);
router.get("/employees", employee.list);
router.post("/login", employee.login);
router.delete("/logout", authenticateUser, employee.logout);

router.get("/departments", authenticateUser,department.list);
router.post("/departments", authenticateUser,authoriseUser,department.create);

router.get("/categories", authoriseUser,category.list);
router.post("/categories", authenticateUser,authoriseUser,category.create);

router.get("/expenses", authenticateUser,expense.list);
router.post("/addExpenses", authenticateUser, expense.create);
router.post("/addExpensesVariable", authenticateUser, expense.addExpense,splitExpanse.variableSplitExpanse);


module.exports = router;