const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : {
        required : true,
        type : String
    },
    role : {
        required : true,
        type : String
    },
    gstno : {
        required : true,
        type : String
    },
    address : {
        required : true,
        type : String
    },
    password : {
        required : true,
        type : String
    }
})

module.exports = mongoose.model('user',userSchema)


/*
{
    "success": true,
    "data": {
        "_id": "5e51ce286b26413f986d411b",
        "name": "Birla",
        "role": "manufacturer",
        "__v": 0
    }
}

{
    "success": true,
    "data": {
        "_id": "5e51ce4d6b26413f986d411c",
        "name": "Rajja",
        "role": "wholeseller",
        "__v": 0
    }
}

{
    "success": true,
    "data": {
        "_id": "5e51ce706b26413f986d411d",
        "name": "mangal",
        "role": "retailer",
        "__v": 0
    }
}
*/