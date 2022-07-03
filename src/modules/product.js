import mongoose, { Schema } from "mongoose";

const Product = new Schema({
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