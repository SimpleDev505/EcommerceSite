import mongoose from "mongoose";
async function connectDB(CONN_STR) {
    try {
        await mongoose.connect(CONN_STR);
        console.log("Connect DB");
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}
export default connectDB;
//# sourceMappingURL=db.js.map