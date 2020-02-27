import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { PostN } from '../models/postN.model';
import { NewPostService } from './new-post.service';

@Injectable({
  providedIn: 'root'
})
export class NewPostNormalizerService {

  constructor(private proxy: NewPostService) { }

  savePost(postInfo: PostN) {
    const post: Post = {
      name: postInfo.name,
      lastName: postInfo.lastName,
      nickname: postInfo.nickname,
      postTitle: postInfo.postTitle,
      postText: postInfo.postText,
      postComments: []
    };
    console.log('en normalizer', post);

    this.proxy.savePost(post);
  }


}


