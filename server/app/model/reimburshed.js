const mongoose = require('mongoose')
const Schema  = mongoose.Schema
const reimbushedSchema = new Schema({
    expanseId:{
        type:Schema.Types.ObjectId,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Reimburshed = mongoose.model('Reimburshed',reimbushedSchema)

module.exports = Reimburshed