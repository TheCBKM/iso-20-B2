const mongoose = require('mongoose')

const SchemaTypes = mongoose.Schema.Types;
const transactionSchema = mongoose.Schema({
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true
    },
    cprice: {
        type: Number,
        required: true
    },
    rebate: {
        type: Number,
        required: true,
        default : 0
    },
    sprice: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    sold: {
        type: Boolean,
        default: false,
    }
    

})

module.exports = mongoose.model('transaction', transactionSchema)


/*
{
    "success": true,
    "data": {
        "rebate": 0,
        "sold": false,
        "_id": "5e51cf4c2c67453ffa0d197e",
        "total": 110,
        "productId": "5e51cf492c67453ffa0d197d",
        "from": "5e51ce286b26413f986d411b",
        "to": "5e51ce4d6b26413f986d411c",
        "sprice": 100,
        "cprice": 80,
        "__v": 0
    }
}


{
    "success": true,
    "data": {
        "rebate": 10,
        "sold": false,
        "_id": "5e51d0902c67453ffa0d197f",
        "total": 143,
        "cprice": 100,
        "from": "5e51ce4d6b26413f986d411c",
        "to": "5e51ce706b26413f986d411d",
        "productId": "5e51cf492c67453ffa0d197d",
        "sprice": 130,
        "__v": 0
    }
}

*/