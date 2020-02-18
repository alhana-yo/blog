import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { BlogEntry } from "../models/blog-entries.models";
import { BlogEntriesNormalizerService } from "../services/blog-entries-normalizer.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  public posts$: Observable<BlogEntry[]>;
  constructor(private _blogEntriesService: BlogEntriesNormalizerService) {}

  ngOnInit(): void {
    this.posts$ = this._blogEntriesService.getPosts();
  }
}
