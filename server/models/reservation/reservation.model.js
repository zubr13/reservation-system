import mongoose from "mongoose";
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  organizer: { type: "String", required: true },
  organizerId: { type: "String" },
  university: { type: "String", required: true },
  building: { type: "String", required: true },
  room: { type: "String", required: true },
  description: { type: "String", required: true },
  startTime: { type: "Date", required: true },
  endTime: { type: "Date", required: true },
  status: { type: "String" },
  dateAdded: { type: "Date", default: Date.now, required: true }
});

export default mongoose.model("Reservation", reservationSchema);
