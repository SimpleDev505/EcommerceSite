import mongoose from "mongoose";
const offersSchema = new mongoose.Schema({
    _id: { type: String },
    index: { type: Number },
    imgs: { type: Array },
}, { collection: "topoffers" });
const offersmodel = mongoose.model("topoffers", offersSchema);
export default offersmodel;
//# sourceMappingURL=offers.js.map