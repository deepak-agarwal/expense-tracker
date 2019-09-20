const Employee = require('../model/employee') 

module.exports.list = (req,res) =>{
    Employee.find().populate('departmentId')
    .then(employee => res.json(employee))
    .catch(err => console.log(err))
}

module.exports.create = (req,res ) =>{
    const body = req.body
    const employee = new Employee(body)
    employee.save()
    .then((employee)=>{
        res.json(employee)
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.login = (req, res) => {
    const body = req.body;
    Employee.findByCredentials(body.email, body.password)
      .then(employee => {
        return employee.generateToken();
      })
      .then(token => {
        res.send(token);
      })
      .catch(err => res.json(err))
  };

  module.exports.logout = (req, res) => {
    const { employee, token } = req;
    Employee.findByIdAndUpdate(employee._id, { $pull: { tokens: { token: token } } })
      .then(() => res.json("Sucessfully logout"))
      .catch(err => res.send(err));
  };

module.exports.update = (req,res) => {
    const id = req.params.id
    const body = req.body
    Employee.findByIdAndUpdate(id,body,{new : true,useFindAndModify:false,runValidators:true})
    .then(employee => {
        if(employee)
        res.json(employee)
        else
        res.json({})
    })
    .catch(err => console.log(err))
}