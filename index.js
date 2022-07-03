import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import product from './src/routes/product'
const app = express();

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use("/api", product);

mongoose.connect("mongodb://localhost:27017/we16310")
    .then(()=>{ console.log("kết nối db thành công"); })
    .catch( error => {console.log(error);})

const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})