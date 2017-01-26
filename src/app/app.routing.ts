import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent} from './welcome/welcome.component';
import { ProjectDetailComponent} from './project-detail/project-detail.component';
import { DonationFormComponent} from './donation-form/donation-form.component';
import { NewProjectFormComponent} from './new-project-form/new-project-form.component';


const appRoutes: Routes = [{

    path: '',
    component: WelcomeComponent
  }, {
    path: 'projects/:id',
    component: ProjectDetailComponent
  }, {
    path: 'projects/:id/donation-form',
    component: DonationFormComponent
  }, {
    path: 'new-project-form',
    component: NewProjectFormComponent
  }];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
