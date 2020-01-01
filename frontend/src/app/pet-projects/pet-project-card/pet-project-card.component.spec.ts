import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetProjectCardComponent } from './pet-project-card.component';

describe('ProjectCardComponent', () => {
  let component: PetProjectCardComponent;
  let fixture: ComponentFixture<PetProjectCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetProjectCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
