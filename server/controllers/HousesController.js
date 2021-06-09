import { houseService } from '../services/HousesService'
import BaseController from '../utils/BaseController'

export class HousesController extends BaseController {
  constructor() {
    super('api/houses')
    this.router
      .get('', this.getHouses)
      .post('', this.newHouse)
      .put('/:id', this.updateHouse)
      .delete('/:id', this.deleteHouse)
  }

  async getHouses(req, res, next) {
    try {
      const houses = await houseService.getHouses()
      return res.send(houses)
    } catch (error) {
      next(error)
    }
  }

  async newHouse(req, res, next) {
    try {
      const house = await houseService.newHouse(req.body)
      return res.send(house)
    } catch (error) {
      next(error)
    }
  }

  async updateHouse(req, res, next) {
    try {
      const house = await houseService.updateHouse(req.params.id, req.body)
      return res.send(house)
    } catch (error) {
      next(error)
    }
  }

  async deleteHouse(req, res, next) {
    try {
      const house = await houseService.deleteHouse(req.params.id)
      return res.send(house)
    } catch (error) {
      next(error)
    }
  }
}
