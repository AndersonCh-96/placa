import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Placa } from '../../interfaces/placa';
import { RouterModule } from '@angular/router';
import { OtherComponent } from '../other/other.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    OtherComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name = signal(
    new FormControl('', [Validators.required, Validators.minLength(7)])
  );

  filter = signal(1);

  //arreglo de los dias
  datos = signal<Placa[]>([
    {
      id: 1,
      dia: 'Lunes',
      descipcion: 'Ud no puede circular',
    },
    {
      id: 2,
      dia: 'Martes',
      descipcion: 'Ud no puede circular',
    },
    {
      id: 3,
      dia: 'Miércoles',
      descipcion: 'Terminadas en 5 y 6',
    },
    {
      id: 4,
      dia: 'Jueves',
      descipcion: 'Terminadas en 7 y 8',
    },
    {
      id: 5,
      dia: 'Viernes',
      descipcion: 'Terminadas en 9 y 0',
    },
    {
      id: 6,
      dia: 'Sábado',
      descipcion: 'Circulan todas las placas',
    },
    {
      id: 7,
      dia: 'Domingo',
      descipcion: 'Circulan todas las placas',
    },
  ]);

  final = computed(() => {
    const data = this.datos();
    const placa = this.name().value;
    const filtros = this.filter();

    // if (fecha == 'lunes' && placa?.slice(-1) == '1') {
    //   console.log('placas no circulan');
    // }
    // if (fecha == 'martes') {
    //   console.log('es martes');
    // }
    if (filtros === 1) {
      return data.filter((d) => d.id == 1);
    }
    if (filtros === 2) {
      return data.filter((d) => d.id === 2);
    }
    if (filtros === 3) {
      return data.filter((d) => d.id == 3);
    }
    if (filtros === 4) {
      return data.filter((d) => d.id == 4);
    }
    if (filtros === 5) {
      return data.filter((d) => d.id == 5);
    }
    if (filtros === 6) {
      return data.filter((d) => d.id == 6);
    }
    if (filtros === 7) {
      return data.filter((d) => d.id == 7);
    }
    return data;
  });

  ngOnInt() {}
  // public fecha(event: Event) {
  //   const date = event.target as HTMLInputElement;
  //   this.addfecha.set(date.value);

  public fecha(event: Event) {
    const date = event.target as HTMLInputElement;
    const fi = parseInt(date.value);
    // // this.transformDate(fi);
    // this.addfecha.set(fi);
    this.filter.set(fi);
  }
}
