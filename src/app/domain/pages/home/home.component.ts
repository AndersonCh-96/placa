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
import { OtherComponent } from '../other/other.component';
import { ConsultaService } from '../../services/consulta.service';

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
  infoServices = inject(ConsultaService);
  // Services para verificar  la información
  data = this.infoServices.info();
  // Señales
  hour = signal('');

  hourInt = signal(0);
  plate = signal('');
  day = signal('');

  dataFinal = signal<Placa[] | null | undefined>([]);
  public myForm: FormGroup = new FormGroup({
    placa: new FormControl('', [Validators.required, Validators.minLength(7)]),
    hora: new FormControl(0, [Validators.required]),
    dia: new FormControl('', [Validators.required]),
  });

  onSave() {
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
    console.log(this.dataFinal());
  }
}
