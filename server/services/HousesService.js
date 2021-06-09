import { dbContext } from '../db/DbContext'

class HouseService {
  async getHouses() {
    const houses = await dbContext.Houses.find({})
    return houses
  }

  async newHouse(houseData) {
    const house = await dbContext.Houses.create(houseData)
    return house
  }

  async updateHouse(id, houseData) {
    const house = await dbContext.Houses.findByIdAndUpdate(id, houseData)
    return house
  }

  async deleteHouse(id) {
    const house = await dbContext.Houses.findByIdAndDelete(id)
    return house
  }
}

export const houseService = new HouseService()
