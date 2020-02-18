import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { FAKE_POSTS } from "../constants/posts-fake.spec";
import { BlogEntryN } from "../models/blog-entriesN.models";
import { BlogEntriesNormalizerService } from "./blog-entries-normalizer.service";
import { BlogEntriesService } from "./blog-entries.service";

describe("BlogEntriesNormalizerService", () => {
  let service: BlogEntriesNormalizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BlogEntriesNormalizerService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("should normalize post to postNormalize", () => {
    const spyService = spyOn(
      TestBed.inject(BlogEntriesService),
      "getPosts"
    ).and.callFake(() => of(FAKE_POSTS));
    const service: BlogEntriesNormalizerService = TestBed.inject(
      BlogEntriesNormalizerService
    );
    service.getPosts().subscribe((posts: BlogEntryN[]) => {
      expect(posts[0].name).toEqual(FAKE_POSTS[0].name);
      expect(posts[0].lastName).toEqual(FAKE_POSTS[0].lastName);
      expect(posts[0].nickname).toEqual(FAKE_POSTS[0].nickname);
      expect(posts[0].postTitle).toEqual(FAKE_POSTS[0].postTitle);
      expect(posts[0].postText).toEqual(FAKE_POSTS[0].postText);
      expect(posts[0].id).toEqual(FAKE_POSTS[0].id);
    });
    // para comprobar que se ha al menos llamado una vez, sin tener levantado el back
    expect(spyService).toHaveBeenCalled();
  });
});
