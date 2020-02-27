import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      username: new FormControl(''),
      password: new FormControl(''),
      address: new FormGroup({
        city: new FormControl(''),
        postcode: new FormControl('')
      })
    });

  }

  onSave() {
    console.log(this.postForm.value);
    // Aqui recuperamos cada campo username y password, que es lo que necesito para llamar al servicio
    const username = this.postForm.get('username').value;
    const password = this.postForm.get('password').value;
    console.log('nombre ' + username + ', otro ' + password);

  }
}
