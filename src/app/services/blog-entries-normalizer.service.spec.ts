import { TestBed } from '@angular/core/testing';

import { BlogEntriesNormalizerService } from './blog-entries-normalizer.service';

describe('BlogEntriesNormalizerService', () => {
  let service: BlogEntriesNormalizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogEntriesNormalizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
