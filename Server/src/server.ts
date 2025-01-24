import express from "express";
import connectDB from "./Data/db.js";
import cors from "cors";
import offersFolder from "./Data/offers.js";
import dotenv from "dotenv";

dotenv.config({ path: "./db.env" });

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
}));

app.listen(8000, () => {
    connectDB(process.env.DB_CON as string);
    console.log("connect");
});

app.get("/api/getnewoffers", async (req, res) => {
    try {
        const offerimg = await offersFolder.find({});
        res.status(200).json(offerimg);
    } catch (error) {
        res.status(500).json(console.log(error));
    }
});
