import { Router } from 'express'
import SystemApplication from '../../application/system.application'
import { SystemRepository } from '../../domain/system.repository'
import SystemInfraestructure from '../../infraestructure/SystemInfraestructure'
import systemController from './system.controller'

const infraestructure: SystemRepository = new SystemInfraestructure()
const application = new SystemApplication(infraestructure)
const controller = new systemController(application)

class SystemRouter {
	readonly expressRouter: Router
	constructor() {
		this.expressRouter = Router()
		this.mountRoutes()
	}
	mountRoutes() {
		this.expressRouter.post('/insert', controller.insert)
		this.expressRouter.get('/list', controller.list)
		this.expressRouter.post('/listOne/:id', controller.listOne)
		this.expressRouter.put('/update/:id', controller.update)
		this.expressRouter.delete('/delete/:id', controller.delete)
	}
}
export default new SystemRouter().expressRouter
