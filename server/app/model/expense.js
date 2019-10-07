const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  employeeId :{
    type:Schema.Types.ObjectId,
    required:true,
    ref:'Employee'
  },
  employeeIds: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Employee"
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  note: {
    type: String
  },
  isReimbursed: {
    type: Boolean,
    default: false
  },
  expanseCategory: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Category"
  },
  isDeclined: {
    type: Boolean,
    default: false
  },
  variableAmount : [{
    name:{
      type:Schema.Types.ObjectId,
      required:true
    },
    amount:{
      type:Number,
      required:true
    }
  }]
});

const Expense = mongoose.model("Expense", expenseSchema);


module.exports = Expense;
