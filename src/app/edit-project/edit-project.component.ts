import { Component, Input, OnInit } from '@angular/core';
// import { Project } from '../project.model'
import { ProjectService } from '../project.service'

@Component({
  selector: 'edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {
  @Input() selectedProject;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  beginUpdatingProject(projectToUpdate){
    this.projectService.updateProject(projectToUpdate);
  }


}
