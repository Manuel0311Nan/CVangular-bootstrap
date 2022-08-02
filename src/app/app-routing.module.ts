import { ExperienceComponent } from './pages/experience/experience.component';
import { StudiesComponent } from './pages/studies/studies.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
   component: HomeComponent
  },
  {
    path: 'studies',
    component: StudiesComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo:'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
