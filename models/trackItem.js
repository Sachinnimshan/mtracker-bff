import mongoose from "mongoose";

const TrackitemSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  type: { type: String, required: true },
  typeName: { type: String, required: true },
  date: { type: Date, required: true },
  note: { type: String },
});

const TrackItem = mongoose.model("Trackitem", TrackitemSchema);

export default TrackItem;
