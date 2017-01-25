import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],


})
export class WelcomeComponent {
  projects: Project[]=[
    new Project("I Need A Teleporter", "I want to be able to roll out of bed, use the teleporter and be where I need to be. No more commuting bullshit!", 1000000, "Marty", 1),
    new Project("I Want A Hoverboard", "I really want to have some fun...yeah...", 500, "Claire", 2)
  ]
  constructor(private router: Router) {}

  ngOnInit() {
  }

  goToProjectDetailPage(clickedProject: Project) {
    this.router.navigate(['projects', clickedProject.id]);
  }
}
