import { PetProjectService } from './../../service/pet-project.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-project-view',
  templateUrl: './pet-project-view.component.html',
  styleUrls: ['./pet-project-view.component.scss']
})
export class PetProjectViewComponent implements OnInit {

  petProject;

  constructor(private petProjectService: PetProjectService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap
    .subscribe(paramMap => {
      let petProjectName = paramMap.get('pet-project-name');
      this.petProjectService.get(petProjectName)
      .subscribe(petProject => {
        this.petProject = petProject;
      });
    });
  }

}
