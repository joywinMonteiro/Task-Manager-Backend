import { Schema, model } from 'mongoose';

const TaskSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['todo', 'in-progress', 'done'], default: 'todo' }
}, { timestamps: true });

export default model('Task', TaskSchema);
