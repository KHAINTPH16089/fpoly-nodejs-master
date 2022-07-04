import mongoose from "mongoose";

const Product =  mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    }
    
})

export default mongoose.model("Product", Product);