const app = module.exports = require('express')()

app.use('/user',require('./userRoute'))
app.use('/transaction',require('./transactionRoute'))
app.use('/product',require('./productRoute'))
