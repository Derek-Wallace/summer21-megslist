import mongoose from 'mongoose'
const Schema = mongoose.Schema

const House = new Schema(
  {
    price: { type: String, required: true },
    bathrooms: { type: Number, required: true, min: 0 },
    bedrooms: { type: Number, required: true, min: 0 },
    year: { type: Number, required: true, minLength: 4, maxLength: 4 },
    levels: { type: Number, required: true, min: 0 },
    img: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default House
