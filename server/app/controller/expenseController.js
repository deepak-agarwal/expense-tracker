const Expense = require("../model/expense")
const Reimburshed = require("../model/reimburshed")

module.exports.list = (req, res) => {
	if (req.role === "Admin") {
		Expense.find({ isReimbursed: false })
      .populate("expanseCategory")
      .populate('employeeId')
			.populate({
				path: "employeeIds",
				model: "Employee",
				populate: { path: "departmentId", model: "Department" }
			})
			.then(expense => res.json(expense))
			.catch(err => console.log(err))
	} else {
		Expense.find({ isReimbursed: false, employeeId: req.employee._id })
			.populate("expanseCategory")
			.populate({
				path: "employeeIds",
				model: "Employee",
				populate: { path: "departmentId", model: "Department" }
			})
			.then(expense => res.json(expense))
			.catch(err => console.log(err))
	}
}

module.exports.create = (req, res) => {
  const {name,amount,employeeId,employeeIds,note,expenseCategory,variableAmount} = req.body
	const expense = new Expense({name,amount,employeeId,employeeIds,note,expenseCategory,...{variableAmount}})
	expense
		.save()
		.then(expense => {
			res.json(expense)
		})
		.catch(err => {
			res.json(err)
		})
}

module.exports.update = (req, res) => {
  const id = req.params.id
  const body = req.body
  if(req.role === 'Admin'){
    if (body.isReimburshed) {
      const reimburshed = new Reimburshed({ expanseId: id })
      reimburshed
        .save()
        .then(reimburshed => {
          if (reimburshed) res.json(reimburshed)
          else res.json({error:'Unable To add to reimburshment'})
        })
        .catch(err => console.log(err))
    }
  }else{
    Expense.findByIdAndUpdate(id, body, {
      new: true,
      useFindAndModify: false,
      runValidators: true
    })
      .then(expense => {
        if (expense) res.json(expense)
        else res.json({error: 'Updation failure'})
      })
      .catch(err => console.log(err))
    }
  }