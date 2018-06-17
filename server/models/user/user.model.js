import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  surname: {
    type: String,
    required: true,
    trim: true
  },
  mobileNumber: {
    type: String
  },
  ocuppation: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: "string",
    required: true
  },
  university: {
    type: "string"
  }
});

export default mongoose.model("User", userSchema);
