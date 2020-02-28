import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HOST } from '../constants/api.constants';
import { Post } from '../models/post.model';


@Injectable({
  providedIn: 'root'
})
export class NewPostService {

  constructor(private http: HttpClient) { }


  // tslint:disable-next-line: ban-types
  savePost(postInfo: Post): Observable<any> {
    console.log('voy a hacer la petición', JSON.stringify(postInfo));
    return this.http.post<any>(HOST + 'blogEntries', JSON.stringify(postInfo));
    // .pipe(
    //   catchError(this.handleError('savePost', postInfo))
    // );
  }

}


