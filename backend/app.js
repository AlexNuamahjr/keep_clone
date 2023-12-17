import express from "express";
import dotenv from "dotenv";
dotenv.config();
import helmet from "helmet";
import userRoute from "./routes/userRoute.js";
import sequelize from "./config/dbConnect.js";

const PORT = process.env.PORT || 2001;
const app = express();
app.use(helmet);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", userRoute);

app.listen(PORT, async ()=>{
    try {
        await sequelize.authenticate()
        console.log(`Server is running on http://localhost:${PORT}`)
    } catch (error) {
        console.log(error);
    }
})
