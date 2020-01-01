import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetProjectListComponent } from './pet-projects/pet-project-list/pet-project-list.component'


const routes: Routes = [
  {
    path: 'pet-projects',
    loadChildren: './pet-projects/pet-projects.module#PetProjectsModule'
  },
  { path: '', pathMatch: 'full', redirectTo: 'pet-projects' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
