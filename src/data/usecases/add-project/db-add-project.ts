import { AddProject, AddProjectModel } from '../../../domain/usecases/add-project'
import { AddProjectRepository } from '../../protocols/add-project-repository'

export class DbAddProject implements AddProject {
  private readonly addProjectRepository: AddProjectRepository

  constructor (addProjectRepository: AddProjectRepository) {
    this.addProjectRepository = addProjectRepository
  }

  async add (projectData: AddProjectModel): Promise<boolean> {
    return this.addProjectRepository.add(projectData)
  }
}
