//Required package
var pdf = require("pdf-creator-node");
var fs = require('fs');

// Read HTML Template
var html = fs.readFileSync('template.html', 'utf8');

var options = {
    height : "1000px",
    width : "1000px",
    border : "30"
  
}




// var document = {
//     html: html,
    // data: {
    //     sellerName: "Mangal",
    //     sellerAddress: "qwertyuiop",
    //     sellerGSTINNO : "123456",
    //     buyerName: "Birla",
    //     buyerAddress: "qwertyuiop",
    //     buyerGST : "123dwwd",
    //     invoice : "12345",
    //     invoiceDate : "12/07/2019",
    //     productName : "Pencil",
    //     productHsn : "12345",
    //     productGst : "23423423",
    //     productRate : "1200",
    //     productQuantity : "20",
    //     productPer : "per",
    //     productCGst : "1324",
    //     productCGstA : "1324",
    //     productSGst : "1324",
    //     productSGstA : "1324",
    //     total : "1234"

    // },
//     path: "./output.pdf"
// };



function invoiceGener(data,file){

    var document = {
        html: html,
        data: data,
        path: `static/${file}`
    };
    

    return pdf.create(document, options)

    
}
module.exports = {invoiceGener}
