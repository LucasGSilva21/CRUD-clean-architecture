import { Controller, HttpRequest , HttpResponse } from '../../protocols'
import { AddProject } from '../../../domain/usecases/add-project'
import { ok, badRequest, serverError } from '../../helpers/http-helper'
import { MissingParamError } from '../../errors'

export class AddProjectController implements Controller {
  private readonly addProject: AddProject

  constructor (addProject: AddProject) {
    this.addProject = addProject
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['title', 'description']

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const { title, description } = httpRequest.body

      const project = await this.addProject.add({
        title, 
        description
      })

      return ok(project)
    } catch (error) {
      return serverError()
    }
  }
}
