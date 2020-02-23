const app = module.exports = require('express')()

const transactionServices = require('../services/transactionServices')
const productServices = require('../services/productServices')
const userServices = require('../services/userServices')
const { invoiceGener } = require('../services/invoiceGenerator')


app.post('/save/:w', (req, res) => {
        (async () => {
            try {
                myfile = `file-${Date.now()}.pdf`

                if (req.params.w === "manu") {
                    product = await productServices.saveProduct(
                        {
                            "name": req.body.name,
                            "gst": req.body.gst,
                            "hsn": req.body.hsn,
                            "quantity": req.body.quantity
                        }
                    );
                    console.log(product)
                    usr = await userServices.getUser({ "gstno": req.body.to })
                    to = usr[0]._id
                    console.log(to)
                    data = {
                        "productId": `${product._id}`,
                        "tracking": `${product._id}/${req.body.from}/${to}`
                    }
                    console.log(data)
                    uproduct = await productServices.updateProduct(data)
                    console.log(uproduct)

                    total = (Number(req.body.gst) + 100) * Number(req.body.sprice) / 100
                    console.log(total)
                    data = {
                        total: total,
                        "productId": product._id,
                        ...req.body,
                        to: to
                    }
                    console.log(data)
                    tx = await transactionServices.saveTransaction(data)

                    ts = await transactionServices.getTransaction({ _id: tx._id })
                    ts = ts[0]
                    invoiceData = {
                        sellerName: ts.from.name,
                        sellerAddress: ts.from.address,
                        sellerGSTINNO: ts.from.gstno,
                        buyerName: ts.to.name,
                        buyerAddress: ts.to.address,
                        buyerGST: ts.to.gstno,
                        invoice: Math.floor(Math.random() * 10000),
                        invoiceDate: "24/02/2020",
                        productName: ts.productId.name,
                        productHsn: ts.productId.hsn,
                        productGst: ts.productId.gst,
                        productRate: ts.sprice,
                        productQuantity: ts.productId.quantity,
                        productPer: "per",
                        productCGst: ts.productId.gst / 2,
                        productCGstA: ((ts.productId.gst / 2) * ts.sprice / 100) * ts.productId.quantity,
                        productSGst: ts.productId.gst / 2,
                        productSGstA: ((ts.productId.gst / 2) * ts.sprice / 100) * ts.productId.quantity,
                        total: (((ts.productId.gst / 2) * ts.sprice / 100) * ts.productId.quantity * 2) + ts.sprice * ts.productId.quantity

                    }

                    invoiceGener(invoiceData, myfile)
                        .then(re => {
                            res.json({
                                success: true,
                                data: myfile
                            })

                        })
                        .catch(error => {
                            console.error(error)
                        });



                }
                else {
                    pro = await productServices.getProduct({ _id: req.body.productId })
                    total = Number(req.body.sprice) + Number(pro[0].gst) * Number(req.body.sprice / 100)
                    ini = await transactionServices.getTransaction({ productId: req.body.productId, to: req.body.from })
                    upt = await transactionServices.updateTransaction({ transactionId: ini[0]._id, sold: true })
                    console.log(upt)
                    rebate = ini[0].total - ini[0].sprice
                    cprice = Number(ini[0].sprice)
                    usr = await userServices.getUser({ "gstno": req.body.to })
                    to = usr[0]._id
                    console.log(to)
                    data = {
                        ...req.body,
                        total: total,
                        rebate,
                        cprice,
                        to: to
                    }
                    console.log(data)
                    traPromise = await transactionServices.saveTransaction(data)

                    data = {
                        "productId": `${req.body.productId}`,
                        "tracking": `${pro[0].tracking}/${to}`
                    }
                    console.log(data)
                    uproduct = await productServices.updateProduct(data)
                    console.log(uproduct)

                    ts = await transactionServices.getTransaction({ _id: traPromise._id })
                    ts = ts[0]
                    invoiceData = {
                        sellerName: ts.from.name,
                        sellerAddress: ts.from.address,
                        sellerGSTINNO: ts.from.gstno,
                        buyerName: ts.to.name,
                        buyerAddress: ts.to.address,
                        buyerGST: ts.to.gstno,
                        invoice: Math.floor(Math.random() * 10000),
                        invoiceDate: "24/02/2020",
                        productName: ts.productId.name,
                        productHsn: ts.productId.hsn,
                        productGst: ts.productId.gst,
                        productRate: ts.sprice,
                        productQuantity: ts.productId.quantity,
                        productPer: "per",
                        productCGst: ts.productId.gst / 2,
                        productCGstA: ((ts.productId.gst / 2) * ts.sprice / 100) * ts.productId.quantity,
                        productSGst: ts.productId.gst / 2,
                        productSGstA: ((ts.productId.gst / 2) * ts.sprice / 100) * ts.productId.quantity,
                        total: (((ts.productId.gst / 2) * ts.sprice / 100) * ts.productId.quantity * 2) + ts.sprice * ts.productId.quantity

                    }
                    invoiceGener(invoiceData, myfile)
                    .then(re => {
                        console.log(re)
                        res.json({
                            success: true,
                            data: myfile
                        })

                    })
                    .catch(error => {
                        console.error(error)
                    });
                }

            }
            catch (e) {
                console.log(e)
                res.json({
                    success: false
                })
            }
        })();
})

app.get('/get', (req, res) => {

    (async () => {
        try {
            console.log(req.body)
            traPromise = await transactionServices.getTransaction(req.body)
            res.json({
                success: true,
                data: traPromise
            })
        }
        catch (e) {
            console.log(e)
            res.json({
                success: false
            })
        }
    })();
})

app.post('/get', (req, res) => {

    (async () => {
        try {
            console.log(req.body)
            traPromise = await transactionServices.getTransaction(req.body)
            res.json({
                success: true,
                data: traPromise
            })
        }
        catch (e) {
            console.log(e)
            res.json({
                success: false
            })
        }
    })();
})

