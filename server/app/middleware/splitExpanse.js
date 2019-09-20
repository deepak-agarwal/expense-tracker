const Expanse = require('../model/expense')
const Employee = require('../model/employee')

module.exports.splitExpanse = function(req,res,next) {
    console.log(req.expanseId)
    Expanse.findById(req.expanseId)
    .then( expense => {
        if(expense){
            const amount = expense.amount
            const employees = expense.employeeIds
            const splitAmount = amount / employees.length
            console.log(amount,employees,splitAmount)
            employees.map( employeeid =>{
                Employee.findById(employeeid)
                .then(employee => {
                    employee.outstanding += splitAmount 
                    console.log(employee)
                })
                .catch(err => res.json(err))
            })
        }
        else {
            res.json(err)
        }
    })
    .catch(err => res.json(err))
}

module.exports.variableSplitExpanse = function(req,res,next) {
    Expanse.findById(req.expanseId)
    .than(expense => {
        const variableAmount = expense.variableAmount
        const employees = expense.employeeIds
        employees.map( (employeeid,index) =>{
            Employee.findById(employeeid)
            .then(employee => {
                employee.outstanding += variableAmount[index]
            })
            .catch(err => res.json(err))
        })
    })
    .catch(err => console.log(err))
}