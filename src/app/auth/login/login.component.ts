import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { Token } from 'src/app/models/token.model';
import { LoginService } from '../../services/login.service';
import { FormValidator } from '../../validators/form-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      // username: new FormControl('valor por defecto'),
      username: new FormControl(
        '',
        [Validators.required, FormValidator.startWithNumber],
        [FormValidator.userTaken]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ])
    });
  }

  onSave() {
    console.log(this.form.value);
    // Aqui recuperamos cada campo username y password, que es lo que necesito para llamar al servicio
    const username = this.form.get('username').value;
    const password = this.form.get('password').value;
    console.log('usuario ' + username + 'y contraseña ' + password);
    const auth = this.transformToBase64(username, password);
    console.log('datos codificados', auth);
    // this.loginService.login(username, password).subscribe(
    //   // guardamos el token en el session storage
    //   (token: Token) => sessionStorage.setItem("token", token.token)
    // );

    this.loginService.login(auth).pipe(catchError(val => of(val))).subscribe(
      // guardamos el token y el rol en el session storage
      (loggedUserInfo: Token) => {
        console.log('tokeeeeen', loggedUserInfo);
        console.log('rol', loggedUserInfo.role);
        sessionStorage.setItem('token', loggedUserInfo.token);
        sessionStorage.setItem('role', loggedUserInfo.role);

        // sessionStorage.setItem('user-info', JSON.stringify(loggedUserInfo));
      }
    );
  }
  private transformToBase64(username, password) {
    const dataTob64 = username + ':' + password;
    return btoa(dataTob64);
  }
}
