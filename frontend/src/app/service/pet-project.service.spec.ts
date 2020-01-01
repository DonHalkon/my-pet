import { TestBed } from '@angular/core/testing';

import { PetProject.ServiceService } from './pet-project.service';

describe('Project', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetProject = TestBed.get(Project);
    expect(service).toBeTruthy();
  });
});
