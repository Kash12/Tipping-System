/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LadderService } from './ladder.service';

describe('LadderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LadderService]
    });
  });

  it('should ...', inject([LadderService], (service: LadderService) => {
    expect(service).toBeTruthy();
  }));
});
