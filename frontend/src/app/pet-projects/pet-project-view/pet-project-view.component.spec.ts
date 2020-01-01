import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetProjectViewComponent } from './pet-project-view.component';

describe('PetProjectViewComponent', () => {
  let component: PetProjectViewComponent;
  let fixture: ComponentFixture<PetProjectViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetProjectViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetProjectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
