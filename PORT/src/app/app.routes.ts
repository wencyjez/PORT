import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StackComponent } from './components/stack/stack.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';

export const routes: Routes = [
  { path: '',           component: DashboardComponent },
  { path: 'portfolio',  component: DashboardComponent },
  { path: 'stack',      component: StackComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education',  component: EducationComponent },
  { path: '**',         redirectTo: '' }
];
