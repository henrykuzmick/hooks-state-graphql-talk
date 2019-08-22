import mongoose, { Schema } from 'mongoose';

const ColorSchema = new Schema({
  value: {
    type: String,
    required: true,
    trim: true
  }
});

export default mongoose.model('color', ColorSchema);
