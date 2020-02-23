const app = module.exports = require('express')()

const transactionServices = require('../services/transactionServices')
const userServices = require('../services/userServices')

app.post('/save',(req,res)=>{
    (async()=>{
        try{
            console.log(req.body.gstno)
            chkUsr = await userServices.getUser({"gstno":req.body.gstno})
            console.log(chkUsr.length)
            if(chkUsr.length == 0){
            console.log('save user')
            usrPromise = await userServices.saveUser(req.body)
            res.json({
                success : true,
                data : usrPromise
            })
            }
            else{
                console.log('user already')
                res.json({
                    success : false,
                    data : "User Already Registered"
                })

            }
            
        }
        catch(e){
            console.log(e)
            res.json({
                success:false
            })
        }
    })();
})


app.get('/get',(req,res)=>{
    (async()=>{
        try{
            usrPromise = await userServices.getUser(req.body)
            res.json({
                success : true,
                data : usrPromise
            })
        }
        catch(e){
            console.log(e)
            res.json({
                success:false
            })
        }
    })();
})


app.post('/login',(req,res)=>{
    (async()=>{
        try{
            usrPromise = await userServices.getUser(req.body)

            if(usrPromise.length == 0){
                console.log('Password not match')
                res.json({
                    success : false,
                    data : "kindly check your credentials"
                })
                }
                else{
                    console.log('Login successful')
                    res.json({
                        success : true,
                        data : usrPromise
                    })
    
                }
        }
        catch(e){
            console.log(e)
            res.json({
                success:false
            })
        }
    })();
})

app.post('/rebate',(req,res)=>{
    (async()=>{
        try{
            console.log(req.body)
            traPromise = await transactionServices.getTransaction(req.body)
            console.log(traPromise)
            res.json({
                success : true,
                data : traPromise
            })
        }
        catch(e){
            console.log(e)
            res.json({
                success:false
            })
        }
    })();
})