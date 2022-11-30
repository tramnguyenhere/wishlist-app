const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGODB_URI;

console.log('connected to', url);

mongoose
  .connect(url)
  .then(() => {
    console.log('connected to MongoDB');
  })
  .catch((error) => console.log('error connecting to MongoDB', error.message));

const wishItemSchema = new mongoose.Schema({
  id: String,
  name: { type: String, required: true },
  whereToBuy: { type: String, minLength: 9 },
  available: Boolean,
  imageUrl: { type: String, minLength: 10 },
});

wishItemSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('WishItem', wishItemSchema);
