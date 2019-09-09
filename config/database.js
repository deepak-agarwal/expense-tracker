const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/notes-app',{useNewUrlParser:true})
.then(()=>{
    console.log('Connection Established with db')
})
.catch(err=>{
    console.log(err)
})

module.exports = mongoose