import { FormControl } from "@angular/forms";

export class FormValidator {
  static startWithNumber(control: FormControl) {
    const firstChar = control.value.charAt(0);
    if (firstChar && !isNaN(firstChar)) {
      return { startWithNumber: true };
    } else {
      return null;
    }
  }

  // método que revisa si el usuario existe en la base de datos
  static userTaken(control: FormControl) {
    return new Promise(resolve => {
      setTimeout(() => {
        // El control es el elemento al que estás aplicando la validación. Es el campo
        if (control.value === "aa") {
          resolve({ userTaken: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
