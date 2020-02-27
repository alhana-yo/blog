import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HOST } from '../constants/api.constants';


@Injectable({
  providedIn: 'root'
})
export class NewPostService {

  constructor(private http: HttpClient) { }


  // tslint:disable-next-line: ban-types
  savePost(postInfo: Object): Observable<any> {
    return this.http.post(HOST + 'blogEntries', postInfo);
  }

}


