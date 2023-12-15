import express from "express";
import dotenv from "dotenv";
dotenv.config();
import helmet from "helmet";

const PORT = process.env.PORT || 2001;
const app = express();
app.use(helmet)

app.listen(PORT, ()=>{
    try {
        console.log(`Server is running on http://localhost:${PORT}`);
    } catch (error) {
        console.log(error);
    }
})
