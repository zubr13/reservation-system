import mongoose from "mongoose";
const Schema = mongoose.Schema;

const lectionSchema = new Schema({
  lecturer: { type: "String", required: true },
  title: { type: "String", required: true },
  group: { type: "String" },
  startTime: { type: "Date", required: true },
  endTime: { type: "Date", required: true },
  dateAdded: { type: "Date", default: Date.now, required: true },
  room: { type: "String", required: true },
  university: { type: "String", required: true }
});

export default mongoose.model("Lection", lectionSchema);
