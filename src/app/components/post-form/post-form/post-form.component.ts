import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewPostNormalizerService } from 'src/app/services/new-post-normalizer.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;
  constructor(private _newPostService: NewPostNormalizerService) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      personalInfo: new FormGroup({
        name: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
      }),
      nickname: new FormControl('', [Validators.required]),
      postInfo: new FormGroup({
        postTitle: new FormControl('', [Validators.required]),
        postText: new FormControl('', [Validators.required]),
      })
    });

  }

  onSave() {
    console.log('lo que recogemos del formulario', this.postForm.value);
    // REcuperamos toda la info que necesitamos mandar en la petición, y mandamos esa info
    // al servicio que normaliza la info para que el servidor la pueda consumir
    const postInfo = {
      name: this.postForm.get('personalInfo.name').value,
      lastName: this.postForm.get('personalInfo.lastName').value,
      nickname: this.postForm.get('nickname').value,
      postTitle: this.postForm.get('postInfo.postTitle').value,
      postText: this.postForm.get('postInfo.postText').value

    };
    console.log('info que mandamos', postInfo);
    this._newPostService.savePost(postInfo);
  }
}
