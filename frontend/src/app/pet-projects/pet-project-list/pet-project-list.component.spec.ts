import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetProjectListComponent } from './pet-project-list.component';

describe('ProjectListComponent', () => {
  let component: PetProjectListComponent;
  let fixture: ComponentFixture<PetProjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetProjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
