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
      id: { type: "String" },
      name: { type: "String", required: true },
      latitude: { type: "Number", required: true },
      longitude: { type: "Number", required: true },
      rooms: [
        {
          id: { type: "String" },
          name: { type: "String" },
          full_name: { type: "String" },
          kpimaps_id: { type: "String" },
          building: { type: "Number", required: true }
        }
      ]
    }
  ],
  dateAdded: { type: "Date", default: Date.now, required: true }
});

export default mongoose.model("University", universitySchema);
