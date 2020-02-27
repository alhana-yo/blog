import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;
  constructor() { }

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
    console.log(this.postForm.value);
    // Aqui recuperamos la información de los campos que necesitamos
    const username = this.postForm.get('personalInfo.name').value;
    const password = this.postForm.get('nickname').value;
    console.log('nombre ' + username + ', otro ' + password);

    // REcuperamos toda la info que necesitamos mandar en la petición, y mandamos esa info
    // al servicio que normaliza la info para que el servidor la pueda consumir

  }
}
