const Expense = require('../model/expense')
const Reimburshed = require('../model/reimburshed')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

module.exports.list = (req,res) =>{
    Expense.find({isReimbursed : false}).populate('expanseCategory').populate({path: 'employeeIds',model: 'Employee',populate: {path: 'departmentId',model: 'Department'}})
    .then(expense => res.json(expense))
    .catch(err => console.log(err))
}

module.exports.create = (req,res ) =>{
    const body = req.body
    const expense = new Expense(body)
    expense.save()
    .then((expense)=>{
        res.json(expense)
    })
    .catch(err=>{
        res.json(err)
    })
}

module.exports.update = (req,res) => {
    const id = req.params.id
    const body = req.body
    if(body.isReimburshed){
        const reimburshed = new Reimburshed({expanseId:id})
        reimburshed.save()
        .then(reimburshed =>{
            if(reimburshed)
            res.json(reimburshed)
            else
            res.json({})
        })
        .catch(err=>console.log(err))
    }
    Expense.findByIdAndUpdate(id,body,{new : true,useFindAndModify:false,runValidators:true})
    .then(expense => {
        if(expense)
        res.json(expense)
        else
        res.json({})
    })
    .catch(err => console.log(err))
}