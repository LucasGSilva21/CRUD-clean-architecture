import { AddProjectController } from '../../presentation/controllers/add-project/add-project'
import { ProjectMongoRepository } from '../../infra/db/mongodb/project-repository/project'

export const makeProjectController = (): AddProjectController => {
  const projectMongoRepository = new ProjectMongoRepository()

  return new AddProjectController(projectMongoRepository)
}
