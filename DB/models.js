//DB / models.js
const mongoose =  require('mongoose')

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : ture,
        minlength : 2,
        maxlength : 30,
    },
    userId : {
        type : String,
        required : ture,
        unique : true,
    },
    password: {
        type : String,
        required : ture,
        minlength : 8,
        maxlength : 15,
    },
    createdAt : {
        type : Date,
        default : Date.now,
    },

});

const User = mongoose.model('User', userSchema);

module.exports = User;