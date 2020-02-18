import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { BlogEntriesService } from "./blog-entries.service";

describe("BlogEntriesService", () => {
  let service: BlogEntriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BlogEntriesService]
    });
    service = TestBed.inject(BlogEntriesService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
