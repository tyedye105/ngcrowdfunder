import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { PROJECTS } from './mock-projects';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(projectId: string){
    return this.angularFire.database.object('projects/' + projectId);
  }

  updateProject(localUpdatedProject){
    var projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({title: localUpdatedProject.title,
                                creator: localUpdatedProject.creator,
                                description: localUpdatedProject.description, goal: localUpdatedProject.goal, category: localUpdatedProject.category});
  }

  deleteProject(localProjectToDelete){
    var projectEntryInFirebase = this.getProjectById(localProjectToDelete.$key)
    projectEntryInFirebase.remove();
  }

}
