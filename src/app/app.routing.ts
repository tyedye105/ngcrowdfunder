import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent} from './welcome/welcome.component';
import { ProjectDetailComponent} from './project-detail/project-detail.component';
import { DonationFormComponent} from './donation-form/donation-form.component';


const appRoutes: Routes = [{

    path: '',
    component: WelcomeComponent
  }, {
    path: 'projects/:id',
    component: ProjectDetailComponent
  }, {
    path: 'projects/:id/donation-form',
    component: DonationFormComponent
  }];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
