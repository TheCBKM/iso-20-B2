const transactionSchema = require('../models/transaction')
const getTransaction = function(params){
    return transactionSchema.find(params).populate('productId').populate('from').populate('to').exec()
}

const saveTransaction = function(obj){
    let tra = new transactionSchema(obj)
    return tra.save()
}

const updateTransaction = function(data){
    return transactionSchema.updateOne({_id : data.transactionId},data).exec()
   
}
module.exports = {getTransaction,saveTransaction, updateTransaction}