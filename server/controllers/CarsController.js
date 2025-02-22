
import { Auth0Provider } from '@bcwdev/auth0provider'
import { carsService } from '../services/CarsService'
import BaseController from '../utils/BaseController'

export class CarsController extends BaseController {
  constructor() {
    super('api/cars')
    this.router
      .get('', this.getCars)
      .get('/:id', this.getCar)
      .use(Auth0Provider.isAuthorized)
      .post('', this.createCar)
      .put('/:id', this.updateCar)
      .delete('/:id', this.deleteCar)
  }

  async getCar(req, res, next) {
    try {
      const car = await carsService.getCar(req.params.id)
      res.send(car)
    } catch (e) {
      next(e)
    }
  }

  async deleteCar(req, res, next) {
    try {
      const car = await carsService.deleteCar(req.params.id)
      return res.send(car)
    } catch (error) {
      next(error)
    }
  }

  async updateCar(req, res, next) {
    try {
      const id = req.params.id
      req.body.creatorId = req.account.id
      const car = await carsService.updateCar(id, req.body)
      return res.send(car)
    } catch (error) {
      next(error)
    }
  }

  async createCar(req, res, next) {
    try {
      req.body.creatorId = req.account.id
      const car = await carsService.createCar(req.body)
      return res.send(car)
    } catch (error) {
      next(error)
    }
  }

  async getCars(req, res, next) {
    try {
      const cars = await carsService.getCars(req.query)
      return res.send(cars)
    } catch (error) {
      next(error)
    }
  }
}
