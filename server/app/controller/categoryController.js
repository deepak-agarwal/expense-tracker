const Category = require('../model/category')

module.exports.list = (req,res)=>{
    Category.find()
    .then(category => res.send(category))
    .catch(err=>{
        console.log(err)
    })
}

module.exports.create = (req,res)=>{
    const body = req.body
    const category = new Category(body)
    category.save()
    .then((category)=>{
        res.json(category)
    })
    .catch(err=>{
        res.json(err)
    })
}
