import { Router } from 'express'
import { makeProjectController } from '../factories/project'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/projects', adaptRoute(makeProjectController()))
}
