const userSchema = require('../models/user')
const getUser = function(params){
    return userSchema.find(params).exec()
}

const saveUser = function(obj){
    let usr = new userSchema(obj)
    return usr.save()
}

module.exports = {getUser,saveUser}