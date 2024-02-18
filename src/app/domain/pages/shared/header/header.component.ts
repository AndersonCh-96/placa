import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OtherComponent } from '../../other/other.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,OtherComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
