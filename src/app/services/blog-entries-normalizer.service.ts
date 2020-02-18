import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/internal/operators";
import { BlogEntry } from "../models/blog-entries.models";
import { BlogEntryN } from "../models/blog-entriesN.models";
import { BlogEntriesService } from "./blog-entries.service";

@Injectable({
  providedIn: "root"
})
export class BlogEntriesNormalizerService {
  constructor(private proxy: BlogEntriesService) {}

  getPosts(): Observable<BlogEntry[]> {
    return this.proxy.getPosts().pipe(
      map((posts: BlogEntry[]) => {
        return posts.map((posts: BlogEntry) => {
          const post: BlogEntryN = {
            name: posts.name,
            lastName: posts.lastName,
            nickname: posts.nickname,
            postTitle: posts.postTitle,
            postText: posts.postText,
            id: posts.id
          };
          return post;
        });
      })
    );
  }
}
