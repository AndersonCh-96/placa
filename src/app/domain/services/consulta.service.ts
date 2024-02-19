import { Injectable, signal } from '@angular/core';
import { Placa } from '../interfaces/placa';

@Injectable({
  providedIn: 'root',
})
export class ConsultaService {
  constructor() {}

  info = signal<Placa[]>([
    {
      id: 1,
      dia: 'Lunes',
      description:
        'No puede circular los vehiculos con las placas terminadas en 1 y 2',
    },
    {
      id: 2,
      dia: 'Martes',
      description:
        'No puede circular los vehiculos con las placas terminadas en 3 y 4',
    },
    {
      id: 3,
      dia: 'Miércoles',
      description:
        'No puede circular los vehiculos con las placas terminadas en 5 y 6',
    },
    {
      id: 4,
      dia: 'Jueves',
      description:
        'No puede circular los vehiculos con las placas terminadas en 7 y 8',
    },
    {
      id: 5,
      dia: 'Viernes',
      description:
        'No puede circular los vehiculos con las placas terminadas en 9 y 0',
    },
    {
      id: 6,
      dia: 'Sábado',
      description: 'Todos los vehículos tienen libre circulación',
    },
    {
      id: 7,
      dia: 'Domingo',
      description: 'Todos los vehículos tienen libre circulación',
    },
    {
      id: 8,
      dia: 'Feriados',
      description: 'Todos los vehículos tienen libre circulación',
    },
  ]);

  public changeHour(hour: string) {
    const data = hour.replace(':', '');
    const hourInt = parseInt(data);
    return hourInt;
  }

  public changeFinal(hour: number, plate: string, day: string) {
    if (day === '1') {
      if (plate.slice(-1) === '1' || plate.slice(-1) === '2') {
        if ((600 < hour && hour < 930) || (hour > 1600 && hour < 2100)) {
          return this.info().filter((d) => d.id == 1);
        }
      }
    }
    if (day === '2') {
      if (plate.slice(-1) === '3' || plate.slice(-1) === '4') {
        if ((600 < hour && hour < 930) || (hour > 1600 && hour < 2100)) {
          return this.info().filter((d) => d.id == 2);
        }
      }
    }
    if (day === '3') {
      if (plate.slice(-1) === '5' || plate.slice(-1) === '6') {
        if ((600 < hour && hour < 930) || (hour > 1600 && hour < 2100)) {
          return this.info().filter((d) => d.id == 3);
        }
      }
    }
    if (day === '4') {
      if (plate.slice(-1) === '7' || plate.slice(-1) === '8') {
        if ((600 < hour && hour < 930) || (hour > 1600 && hour < 2100)) {
          return this.info().filter((d) => d.id == 4);
        }
      }
    }
    if (day === '5') {
      if (plate.slice(-1) === '9' || plate.slice(-1) === '10') {
        if ((600 < hour && hour < 930) || (hour > 1600 && hour < 2100)) {
          return this.info().filter((d) => d.id == 5);
        }
      }
    }
    if (day === '6') {
      return this.info().filter((d) => d.id == 6);
    }
    if (day === '7') {
      return this.info().filter((d) => d.id == 7);
    }
    if (day === '8') {
      return this.info().filter((d) => d.id == 8);
    }
    // if (
    //   (day === '2' &&
    //     (plate.slice(-1) === '3' || plate.slice(-1) === '4') &&
    //     hour > 600 &&
    //     hour < 930) ||
    //   (hour > 1600 && hour < 2100)
    // ) {
    //   return this.info().filter((d) => d.id == 2);
    // }
    // if (
    //   (day === '3' &&
    //     (plate.slice(-1) === '5' || plate.slice(-1) === '6') &&
    //     hour > 600 &&
    //     hour < 930) ||
    //   (hour > 1600 && hour < 2100)
    // ) {
    //   return this.info().filter((d) => d.id == 3);
    // }
    // if (
    //   (day === '4' &&
    //     (plate.slice(-1) === '7' || plate.slice(-1) === '8') &&
    //     hour > 600 &&
    //     hour < 930) ||
    //   (hour > 1600 && hour < 2100)
    // ) {
    //   return this.info().filter((d) => d.id == 4);
    // }
    // if (
    //   (day === '5' &&
    //     (plate.slice(-1) === '9' || plate.slice(-1) === '0') &&
    //     hour > 600 &&
    //     hour < 930) ||
    //   (hour > 1600 && hour < 2100)
    // ) {
    //   return this.info().filter((d) => d.id == 5);
    // }
    // if (day === '6') {
    //   return this.info().filter((d) => d.id == 6);
    // }
    // if (day === '7') {
    //   return this.info().filter((d) => d.id == 7);
    // }

    return;
  }

  public conditional(hora: number) {
    if ((hora > 600 && hora < 930) || (hora > 1600 && hora < 2100)) {
      return hora;
    }
    return;
  }
}
