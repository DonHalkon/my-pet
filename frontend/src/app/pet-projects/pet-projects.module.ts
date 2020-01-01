import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PetProjectCardComponent } from './pet-project-card/pet-project-card.component';
import { PetProjectListComponent } from './pet-project-list/pet-project-list.component';
import { PetProjectCardListComponent } from './pet-project-card-list/pet-project-card-list.component';
import { PetProjectViewComponent } from './pet-project-view/pet-project-view.component';
import { PetProjectsRoutingModule } from './pet-projects-routing.module'



@NgModule({
  declarations: [PetProjectCardComponent, PetProjectListComponent, PetProjectCardListComponent, PetProjectViewComponent],
  imports: [
    CommonModule,
    PetProjectsRoutingModule,
    MDBBootstrapModule
  ]
})
export class PetProjectsModule { }
