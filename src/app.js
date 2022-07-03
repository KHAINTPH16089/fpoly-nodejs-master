import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use("/api", (rep, res) => {
    console.log("alo");
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})