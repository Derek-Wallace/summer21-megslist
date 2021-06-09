import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CarSchema } from '../models/Car'

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Cars = mongoose.model('cars', CarSchema)
}

export const dbContext = new DbContext()
