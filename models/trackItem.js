import mongoose from "mongoose";

const TrackitemSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  type: { type: String, required: true },
  date: { type: Date, required: true, default: new Date() },
  note: { type: String, default: "" },
});

const TrackItem = mongoose.model("Trackitem", TrackitemSchema);

export default TrackItem;
