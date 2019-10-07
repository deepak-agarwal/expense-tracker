const Employee = require("../model/employee")

const authenticateUser = function(req, res, next) {
	const token = req.header("x-auth")
	if (token) {
		Employee.findByToken(token)
			.then(employee => {
				if (employee) {
					req.employee = employee
					req.token = token
					req.role = employee.role
					next()
				} else {
					res.status("401").send({ notice: "token not available" })
				}
			})
			.catch(err => {
				res.status("401").send(err)
			})
	} else {
		res.status("401").send({ error: "token not available" })
	}
}

const authoriseUser = function(req, res, next) {
	if (req.role == "Admin") {
		next()
	} else {
		res.status("403").send({
			error: "User not authorised"
		})
	}
}

module.exports={
  authenticateUser,
  authoriseUser
}