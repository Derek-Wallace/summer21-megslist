import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CarSchema = new Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  year: { type: Number, min: 1700, max: 9999 },
  imgUrl: { type: String, default: 'https://www.pinclipart.com/picdir/middle/548-5480712_generic-placeholder-image-transparent-car-accident-icon-clipart.png' },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
},
{ timestamps: true, toJSON: { virtuals: true } })

CarSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
