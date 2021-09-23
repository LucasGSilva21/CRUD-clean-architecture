import { AddProjectRepository } from '../../../../data/protocols/add-project-repository'
import { AddProjectModel } from '../../../../domain/usecases/add-project'
import { MongoHelper } from '../helpers/mongo-helper'

export class ProjectMongoRepository implements AddProjectRepository {
  async add (projectData: AddProjectModel): Promise<boolean> {
    const projectCollection = MongoHelper.getCollection('projects')

    const result = await projectCollection.insertOne(projectData)

    return result.insertedId !== null
  }
}
