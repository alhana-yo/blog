export interface Post {
  name: string;
  lastName: string;
  nickname: string;
  postTitle: string;
  postText: string;
  // tslint:disable-next-line: ban-types
  postComments: Object[];
}

