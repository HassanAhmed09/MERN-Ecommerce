import express from "express";
import data from "./data.js";
import cors from "cors";
import { mongoose } from "mongoose";
import  dotenv  from 'dotenv';
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";

dotenv.config();

mongoose
    .connect(process.env.MONOGODB_URI)
    .then(() => {
        console.log('MongoDB Connected Successfully');
})
.catch((err) =>{
    console.log(err.message);
});

const app = express();
app.use('/api/seed', seedRouter);
//test
app.use(cors({credentials: true}));
app.use('/api/products', productRouter);



const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`app listening to http://localhost:${port}`);
})