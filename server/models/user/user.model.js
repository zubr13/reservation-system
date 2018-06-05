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
    type: String,
    required: true
  },
  ocuppation: {
    type: String
  },
  password: {
    type: String,
    required: true
  }
});

export default mongoose.model("User", userSchema);
