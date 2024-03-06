import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  public com = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  public numbPlate = (control: FormControl): ValidationErrors | null => {
    const value: string = control.value.trim();
    const final = value.slice(-1);

    let dos = value.slice(-3);
    //Expresión regular que elimina todos los caracteres y deja los numeros
    let contar_numeros = value.replace(/[^0-9]/g, '');
    let fin = contar_numeros.slice(-3);

    if (dos !== fin) {
      return {
        a: true,
      };
    }

    return null;
  };
}
