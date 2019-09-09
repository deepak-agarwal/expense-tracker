const Expense = require('../model/expense')

module.exports.list = (req,res) =>{
    Expense.find({isDeleted : false})
    .then(expanse => res.json(expense))
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
    Expense.findByIdAndUpdate(id,body,{new : true,useFindAndModify:false,runValidators:true})
    .then(expense => {
        if(expense)
        res.json(expense)
        else
        res.json({})
    })
    .catch(err => console.log(err))
}