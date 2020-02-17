import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HOST } from "../constants/api.constants";
import { BlogEntry } from "../models/blog-entries.models";

@Injectable({
  providedIn: "root"
})
export class BlogEntriesService {
  constructor(private http: HttpClient) {}

  public getPosts(): Observable<BlogEntry[]> {
    return this.http.get<BlogEntry[]>(HOST + "blogEntries");
  }
}
