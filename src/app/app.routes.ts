import { HomeComponent } from './Pages/home/home.component';
import { NotfoundComponent } from './Pages/notfound/notfound.component';
import { ResumeComponent } from './Pages/resume/resume.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'resume', component: ResumeComponent },
  { path: '**', component: NotfoundComponent },
];
