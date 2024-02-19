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

    // verificar que el ultimo caracter es un numero
    // const us = this.com.filter((d) => {
    //   if (final === d) {
    //     return d;
    //   }
    //   return null;
    // });

    let dos = value.slice(-3);
    let contar_numeros = value.replace(/[^0-9]/g, '');

    // const prue = () => {
    //   if (dos === contar_numeros) {
    //     return dos;
    //   } else {
    //     return null;
    //   }
    // };

    if (dos !== contar_numeros) {
      return {
        a: true,
      };
    }

    return null;
  };
}
