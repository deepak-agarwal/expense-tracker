const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    credit:{
        type:Number,
        default: 0
    },
    // avatar:{
    //     type:String,
    //     data:Buffer
    // },
    departmentId:{
        type:Schema.Types.ObjectId,
        ref:"Department"
    }
})

const Employee = mongoose.model('Employee',employeeSchema)

module.exports = Employee