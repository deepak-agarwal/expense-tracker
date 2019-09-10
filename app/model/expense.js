const mongoose = require('mongoose')

const Schema = mongoose.Schema

const expenseSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    employeeIds : [{
        type: Schema.Types.ObjectId,
        required: true,
        ref:'Employee'
    }],
    createdAt :{
        type:Date,
        default:Date.now
    },
    // file:{
    //     type: String,
    //      data: Buffer
    // },
    note:{
        type:String
    },
    // expenseIcon:{
    //     type: String,
    //      data: Buffer
    // },
    isReimbursed :{
        type:Boolean,
        default:false
    },
    
    expanseCategory:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Category'
    },
    isDeclined :{
        type:Boolean,
        default:false
    }
})

const Expense = mongoose.model('Expense',expenseSchema)

module.exports = Expense