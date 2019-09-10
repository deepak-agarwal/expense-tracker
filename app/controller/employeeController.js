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