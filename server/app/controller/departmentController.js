const Department = require('../model/department')

module.exports.list = (req,res)=>{
    Department.find()
    .then(department => res.json(department))
    .catch(err=>{
        console.log(err)
    })
}

module.exports.create = (req,res)=>{
    const body = req.body
    const department = new Department(body)
    department.save()
    .then((department)=>{
        res.json(department)
    })
    .catch(err=>{
        res.json(err)
    })
}
