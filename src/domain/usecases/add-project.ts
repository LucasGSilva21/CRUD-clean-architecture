export interface AddProjectModel {
  title: string;
  description: string;
}

export interface AddProject {
  add (project: AddProjectModel): Promise<boolean>
}
