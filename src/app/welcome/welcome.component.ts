import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ProjectService]


})
export class WelcomeComponent implements OnInit {
  projects: Project[]=[]
  filterByCategory: string = "all";
  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();

  }

  onChange(optionFromMenu){
    this.filterByCategory = optionFromMenu;
  }

  goToProjectDetailPage(clickedProject: Project) {
    this.router.navigate(['projects', clickedProject.id]);
  }
}
