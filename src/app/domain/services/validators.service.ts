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
    const us = this.com.filter((d) => {
      if (final === d) {
        return d;
      }
      return null;
    });

    if (final !== us[0]) {
      return {
        a: true,
      };
    }

    return null;
  };
}
