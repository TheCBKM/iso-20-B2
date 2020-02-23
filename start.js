const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes');
const app = express()

app.use(cors())
app.use('/static',express.static('static'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use('/', routes);
// mongo "mongodb+srv://cluster0-4dxt6.mongodb.net/test"  --username test
mongoose.connect('mongodb+srv://test:test@cluster0-4dxt6.mongodb.net/isotest?retryWrites=true&w=majority', { useNewUrlParser: true,  useUnifiedTopology: true  });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connected to mongo")
});



app.listen(process.env.PORT||5000,(req,res)=>{
    console.log('Server running')
})