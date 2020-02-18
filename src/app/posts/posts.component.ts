import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { BlogEntry } from "../models/blog-entries.models";
import { BlogEntriesService } from "../services/blog-entries.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  public posts$: Observable<BlogEntry[]>;
  constructor(private _blogEntriesService: BlogEntriesService) {}

  ngOnInit(): void {
    this.posts$ = this._blogEntriesService.getPosts();
  }
}
