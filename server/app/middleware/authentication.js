const Employee = require("../model/employee");

module.exports.authenticateUser = function(req, res, next) {
  const token = req.header("x-auth");
  Employee.findByToken(token)
    .then(user => {
      if (employee) {
        req.employee = user;
        req.token = token;
        next();
      } else {
        res.status("401").send({ notice: "token not available" });
      }
    })
    .catch(err => res.status("401").send(err));
};
