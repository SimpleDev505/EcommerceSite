import mongoose from "mongoose";
const offersSchema = new mongoose.Schema({
    offerindex: { type: Number },
    offerimgs: { type: Array },
}, { collection: "latestoffers" });
const offersFolder = mongoose.model("latestoffers", offersSchema);
export default offersFolder;
//# sourceMappingURL=offers.js.map