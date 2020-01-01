import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetProjectCardListComponent } from './pet-project-card-list.component';

describe('ProjectCardListComponent', () => {
  let component: PetProjectCardListComponent;
  let fixture: ComponentFixture<PetProjectCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetProjectCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetProjectCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
