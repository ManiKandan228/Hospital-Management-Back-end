const mongoose = require('mongoose')

const hospchema = new mongoose.Schema(
    {
        Id: {
            type : Number,
            required : true
        },
        name : {
            type : String,
            required : true
        },
        age : {
            type : Number,
            required : true
        },
        height : {
            type : Number,
            required : true
        },
        weight : {
            type : Number,
            required : true
        },
        BP : {
            type : String,
            required : true
        },
        contact : {
            type : String,
            required : true,
            unique:true
        },
        disease : {
            type : String,
            required : true
        },
    },
    {
        collection : 'hospital'
    }
)
module.exports = mongoose.model('hospital', hospchema)