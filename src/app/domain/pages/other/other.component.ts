import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-other',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './other.component.html',
  styleUrl: './other.component.css',
})
export class OtherComponent {
  days = signal([
    {
      id: 1,
      dia: 'Lunes',
      description: 'No puede circular placa 1 y 2',
    },
    {
      id: 2,
      dia: 'Martes',
      description: 'No puede circular placa 3 y 4',
    },
    {
      id: 3,
      dia: 'Miércoles',
      description: 'No puede circular placa 5 y 6',
    },
    {
      id: 4,
      dia: 'Jueves',
      description: 'No puede circular placa 7 y 8',
    },
    {
      id: 5,
      dia: 'Viernes',
      description: 'No puede circular placa 9 y 0',
    },
    {
      id: 6,
      dia: 'Sábado',
      description: 'Libre circulación',
    },
    {
      id: 7,
      dia: 'Domingo',
      description: 'Libre circulación',
    },
  ]);

  filter = signal('0');
  // hora = signal('');
  datas = signal('');
  hour = signal('');
  newHour = signal(0);
  // dia = signal('');
  final = computed(() => {
    const dias = this.days();
    const filtra = this.filter();
    const dur = this.datas();
    const nHour = this.newHour();

    if (
      (filtra === '1' &&
        (dur.slice(-1) === '1' || dur.slice(-1) === '2') &&
        nHour > 600 &&
        nHour < 930) ||
      (nHour > 1600 && nHour < 2100)
    ) {
      return dias.filter((d) => d.id == 1);
    }
    if (
      (filtra === '2' &&
        (dur.slice(-1) === '3' || dur.slice(-1) === '4') &&
        nHour > 600 &&
        nHour < 930) ||
      (nHour > 1600 && nHour < 2100)
    ) {
      return dias.filter((d) => d.id == 2);
    }
    if (
      (filtra === '3' &&
        (dur.slice(-1) === '5' || dur.slice(-1) === '6') &&
        nHour > 600 &&
        nHour < 930) ||
      (nHour > 1600 && nHour < 2100)
    ) {
      return dias.filter((d) => d.id == 3);
    }
    if (
      (filtra === '4' &&
        (dur.slice(-1) === '7' || dur.slice(-1) === '8') &&
        nHour > 600 &&
        nHour < 930) ||
      (nHour > 1600 && nHour < 2100)
    ) {
      return dias.filter((d) => d.id == 4);
    }
    if (
      (filtra === '5' &&
        (dur.slice(-1) === '9' || dur.slice(-1) === '0') &&
        nHour > 600 &&
        nHour < 930) ||
      (nHour > 1600 && nHour < 2100)
    ) {
      return dias.filter((d) => d.id == 5);
    }
    if (filtra === '6') {
      return dias.filter((d) => d.id == 6);
    }
    if (filtra === '7') {
      return dias.filter((d) => d.id == 7);
    }

    return;
  });

  public myForm: FormGroup = new FormGroup({
    dia: new FormControl('', [Validators.required]),
    hora: new FormControl(0, [Validators.required]),
    placa: new FormControl('', [Validators.required, Validators.minLength(7)]),
  });

  isValid(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  //Mas de una validación
  getError(field: string) {
    if (this.myForm.controls[field]) return null;
    return
  }

  onSave() {
    if (this.myForm.valid) {
      console.log(this.myForm.value.dia);
      this.filter.set(this.myForm.value.dia);
      this.datas.set(this.myForm.value.placa);
      this.hour.set(this.myForm.value.hora);
      this.trasnforHour();

      alert('Confirmar consulta');
    }
    this.myForm.markAllAsTouched();
  }

  trasnforHour() {
    console.log(typeof this.hour());
    let data = this.hour().replace(':', '');
    let hourInt = parseInt(data);
    this.newHour.set(hourInt);
    console.log(typeof hourInt);
  }
}
