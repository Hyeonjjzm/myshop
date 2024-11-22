const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://dbUser:dbuser@cluster0.awym0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')    
    } catch (error){
        throw new Error("Conection Failed!");
    }
};
