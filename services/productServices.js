const productSchema = require('../models/product')
const getProduct = function(params){
    return productSchema.find(params).exec()
}

const saveProduct = function(obj){
    let pro = new productSchema(obj)
    return pro.save()
}

const updateProduct = function(data){
     return productSchema.updateOne({_id : data.productId},{ tracking : data.tracking}).exec()
    
}

module.exports = {getProduct,saveProduct, updateProduct}