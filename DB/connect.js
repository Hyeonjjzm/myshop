// DB/connect.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://newuser:1234@jeonghun.jb9ashc.mongodb.net/?retryWrites=true&w=majority&appName=Jeonghun')
    } catch (error) {
        throw new Error("Connection Failed!");
    }
};
module.exports = connectDB;