import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { FAKE_POSTS } from "../constants/posts-fake.spec";
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
  it("should call to server to get posts", () => {
    const httpMock = TestBed.inject(HttpTestingController);
    service.getPosts().subscribe(posts => expect(posts).toBe(FAKE_POSTS));
    // De esta forma nos estamos protegiendo si alguien modifica esa url
    const request = httpMock.expectOne("https://localhost:3443/blogEntries");
    expect(request.request.method).toEqual("GET");
    request.flush(FAKE_POSTS);
    httpMock.verify();
  });
});
