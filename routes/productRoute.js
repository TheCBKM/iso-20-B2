const app = module.exports = require('express')()
const userSchema = require('../models/user')


const productServices = require('../services/productServices')

app.post('/save',(req,res)=>{
    (async()=>{
        try{
            proPromise = await productServices.saveProduct(req.body)
            res.json({
                success : true,
                data : proPromise
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

app.get('/get',(req,res)=>{
    (async()=>{
        try{
            console.log(req.body)
            proPromise = await productServices.getProduct(req.body)
            res.json({
                success : true,
                data : proPromise
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

app.post('/get',(req,res)=>{
    (async()=>{
        try{
            console.log(req.body)
            proPromise = await productServices.getProduct(req.body)
            res.json({
                success : true,
                data : proPromise
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

app.post('/update', (req,res)=>{
    (async()=>{
        try{
            proPromise = await productServices.updateProduct(req.body)
            res.json({
                success : true,
                data : proPromise
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

app.post('/tracking', (req,res)=>{

    (async()=>{
        try{
            let track = await productServices.getProduct(req.body)
            t = track[0].tracking.split('/')
            ids = []
            for(i=1;i<t.length;i++){
                ids.push(t[i]);
            }
            console.log(ids)
           let usrPromise = await userSchema.find().where('_id').in(ids).exec();
           console.log
           console.log(usrPromise)
            res.json({
                success : true,
                data : usrPromise,
                track
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

