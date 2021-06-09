import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CarSchema } from '../models/Car'
import HouseSchema from '../models/House'

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Cars = mongoose.model('cars', CarSchema)
  Houses = mongoose.model('House', HouseSchema)
}

export const dbContext = new DbContext()
