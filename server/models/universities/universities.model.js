import mongoose from "mongoose";
const Schema = mongoose.Schema;

const universitySchema = new Schema({
  title: { type: "String", required: true },
  description: { type: "String" },
  address: { type: "String", required: true },
  telephone: { type: "String" },
  website: { type: "String" },
  email: { type: "String" },
  city: { type: "String", required: true },
  buildings: [
    {
      number: { type: "String", required: true },
      address: { type: "String", required: true },
      rooms: [
        {
          number: { type: "String" }
        }
      ]
    }
  ],
  dateAdded: { type: "Date", default: Date.now, required: true }
});

export default mongoose.model("University", universitySchema);
