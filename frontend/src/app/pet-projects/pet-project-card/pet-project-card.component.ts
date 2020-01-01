import { PetProjectService } from './../../service/pet-project.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pet-project-card',
  templateUrl: './pet-project-card.component.html',
  styleUrls: ['./pet-project-card.component.scss']
})
export class PetProjectCardComponent implements OnInit {
  @Input() petProject;

  constructor(private petProjectService: PetProjectService) { }

  ngOnInit() {
  }

}
