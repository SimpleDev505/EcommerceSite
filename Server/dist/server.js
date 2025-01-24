import express from "express";
import connectDB from "./Data/db.js";
import cors from "cors";
import dotenv from "dotenv";
//Models
import offersmodel from "./models/offers.js";
dotenv.config({ path: "./db.env" });
const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
}));
app.listen(8000, () => {
    connectDB(process.env.DB_CON);
    console.log("connect");
});
app.get("/api/getnewoffers", async (req, res) => {
    try {
        const getnewoffers = await offersmodel.find({});
        res.status(200).json(getnewoffers);
    }
    catch (error) {
        res.status(500).json(console.log(error));
    }
});
app.get("/api/signin", async (req, res) => {
    try {
    }
    catch (error) {
        res.status(500).json(console.log(error));
    }
});
//# sourceMappingURL=server.js.map