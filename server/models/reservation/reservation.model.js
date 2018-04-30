import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  organizer: { type: 'String', required: true },
  description: { type: 'String', required: true },
  room: { type: 'String', required: true },
  time: { type: 'Date', required: true },
  duration: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Reservation', reservationSchema);
