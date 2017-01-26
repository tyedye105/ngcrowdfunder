import { Component} from '@angular/core';
import { Project } from '../project.model';
import{ AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { ProjectService } from '../project.service';

@Component({
  selector: 'new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css'],
  providers: [ProjectService]
})
export class NewProjectFormComponent {

  constructor(private projectService: ProjectService) { }

  submitForm(title:string, creator: string, description: string, goal: number, category: string) {
    var newProject: Project = new Project(title, description, goal, creator, category);
    console.log(newProject);
    this.projectService.addProject(newProject);
  }


}
