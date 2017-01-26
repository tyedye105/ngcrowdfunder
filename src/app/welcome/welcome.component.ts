import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ProjectService]


})
export class WelcomeComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  filterByCategory: string = "all";
  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();

  }

  onChange(optionFromMenu){
    this.filterByCategory = optionFromMenu;
  }

  goToProjectDetailPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key]);
  }
}
