import mongoose, { Schema } from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  color: {
    type: Schema.Types.ObjectId,
    ref: 'color',
    required: true
  }
});

export default mongoose.model('user', UserSchema);
