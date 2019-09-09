import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

// tslint:disable-next-line: variable-name
const ContactSchema: any = new Schema({
  firstName: { type: String, required: 'firstName is required' },
  lastName: { type: String, required: 'lastName is required' },
  email: {
    type: String,
    required: 'Email is required',
    index: {
      unique: true,
    },
  },
  phone: { type: String },
  company: { type: String },
  created_date: { type: Date, default: Date.now },
});


// tslint:disable-next-line:variable-name
export const Contact = mongoose.model('Contact', ContactSchema);
