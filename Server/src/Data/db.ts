import mongoose from "mongoose";

async function connectDB(CONN_STR: string) {
    try {
        await mongoose.connect(CONN_STR);
        console.log("Connect DB");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
export default connectDB;
