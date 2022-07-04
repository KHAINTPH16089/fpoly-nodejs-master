import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
const app = express();
import product from './src/routes/product';
// let router = module.require('./src/routes/product');

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use("/api", product);

mongoose.connect("mongodb://localhost:27017/test2")
    .then(()=>{console.log("kết nỗi db thành công");})
    .catch(error => {console.log(error);})

const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})