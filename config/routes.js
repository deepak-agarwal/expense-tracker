const express = require('express')
const router = express.Router()
const department = require('../app/controller/departmentController')
const employee = require('../app/controller/employeeController')
const category = require('../app/controller/categoryController')
const expense = require('../app/controller/expenseController')




router.get('/departments',department.list)
router.post('/departments',department.create)

router.get('/employees',employee.list)
router.post('/employees',employee.create)

router.get('/categories',category.list)
router.post('/categories',category.create)


router.get('/expenses',expense.list)
router.post('/expenses',expense.create)

module.exports = router