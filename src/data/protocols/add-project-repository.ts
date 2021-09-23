import { AddProjectModel } from '../../domain/usecases/add-project'

export interface AddProjectRepository {
  add (project: AddProjectModel): Promise<boolean>
}
