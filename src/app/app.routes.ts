import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StackComponent } from './components/stack/stack.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificatesComponent } from './components/certificates/certificates.component';

export const routes: Routes = [
  { path: '',           component: DashboardComponent },
  { path: 'portfolio',  component: ProjectsComponent },
  { path: 'stack',      component: StackComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education',  component: EducationComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: '**',         redirectTo: '' }
];
