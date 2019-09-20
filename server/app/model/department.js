const mongoose = require('mongoose')

const Schema = mongoose.Schema

const departmentSchema = new Schema ({
 name:{
     type:String,
     required:true
 },
//  icon :{
//      type:String,
//      data:Buffer
//  }
})

const Department = mongoose.model('Department',departmentSchema)

module.exports = Department