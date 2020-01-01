import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PetProjectService, PetProject } from '../../service/pet-project.service'

@Component({
  selector: 'app-project-list',
  templateUrl: './pet-project-list.component.html',
  styleUrls: ['./pet-project-list.component.scss']
})
export class PetProjectListComponent implements OnInit {

  petProjects: PetProject[];

  constructor(private petProjectService: PetProjectService,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap
    .subscribe(paramMap => {
      let petProjectName = paramMap.get('pet-project-name');
      if (!petProjectName) {
        petProjectName = '';
      }
      this.getPetProjects(petProjectName);
    });

    // this.projects = this.petProjectService.getAll(); 
  }

  getPetProjects(petProjectName: string) {
    this.petProjectService.get(petProjectName)
      .subscribe(petProjects => {
        this.petProjects = petProjects;
      });
  }

}
