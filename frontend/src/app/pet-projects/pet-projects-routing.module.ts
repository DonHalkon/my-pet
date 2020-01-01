import { PetProjectViewComponent } from './pet-project-view/pet-project-view.component';
import { PetProjectListComponent } from './pet-project-list/pet-project-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    
    {
        path: '',
        component: PetProjectListComponent
    },
    //   {
    //     path: '',
    //     component: PetProjectListComponent
    //   },
    {
        path: 'view/:pet-project-name',
        component: PetProjectViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PetProjectsRoutingModule { }
