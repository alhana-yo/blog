import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../../services/login.service";
import { FormValidator } from "../../validators/form-validator";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      // username: new FormControl('valor por defecto'),
      username: new FormControl(
        "",
        [Validators.required, FormValidator.startWithNumber],
        [FormValidator.userTaken]
      ),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(2)
      ])
    });
  }

  onSave() {
    console.log(this.form.value);
    // Aqui recuperamos cada campo username y password, que es lo que necesito para llamar al servicio
    const username = this.form.get("username").value;
    const password = this.form.get("password").value;
    const codedData = this.transformToBase64(username, password);
    console.log("datos codificados", codedData);
    // this.loginService.login(username, password).subscribe(
    //   // guardamos el token en el session storage
    //   (token: Token) => sessionStorage.setItem("token", token.token)
    // );
  }
  transformToBase64(username, password) {
    // console.log("username" + username + " and password " + password);
    const dataTob64 = username + ":" + password;
    // console.log("data to base 64", dataTob64);
    // console.log("Codificado", window.btoa(dataTob64));
    return window.btoa(dataTob64);
  }
}
