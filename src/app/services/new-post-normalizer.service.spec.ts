import { TestBed } from '@angular/core/testing';

import { NewPostNormalizerService } from './new-post-normalizer.service';

describe('NewPostNormalizerService', () => {
  let service: NewPostNormalizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewPostNormalizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
