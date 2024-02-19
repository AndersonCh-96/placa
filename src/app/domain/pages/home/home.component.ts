import { Component, computed, inject, signal } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Placa } from '../../interfaces/placa';
import { RouterModule } from '@angular/router';

import { ConsultaService } from '../../services/consulta.service';
import { ValidatorsService } from '../../services/validators.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  infoServices = inject(ConsultaService);
  // Services para verificar  la información
  data = this.infoServices.info();

  //validaciones perzonalizadas
  validation = inject(ValidatorsService);
  // Señales
  hour = signal('');

  hourInt = signal(0);
  plate = signal('');
  day = signal('');

  dataFinal = signal<Placa[] | undefined>([]);

  public myForm: FormGroup = new FormGroup({
    placa: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(7),
      this.validation.numbPlate,
    ]),
    hora: new FormControl('', [Validators.required]),
    dia: new FormControl('', [Validators.required]),
  });

  onSave() {
    this.plate.set(this.myForm.value.placa);
    if (this.myForm.valid) {
      this.hour.set(this.myForm.value.hora);
      this.hourInt.set(this.infoServices.changeHour(this.hour()));
      this.plate.set(this.myForm.value.placa);
      this.day.set(this.myForm.value.dia);
    }
    const fi = this.infoServices.changeFinal(
      this.hourInt(),
      this.plate(),
      this.day()
    );
    this.dataFinal.set(fi);
    this.myForm.markAllAsTouched();
    alert('Confirmar consulta');
  }
}
