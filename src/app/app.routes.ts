import { Routes } from '@angular/router';
import { HomeComponent } from './domain/pages/home/home.component';
import { OtherComponent } from './domain/pages/other/other.component';
import { HeaderComponent } from './domain/pages/shared/header/header.component';

export const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      { path: '', component: HomeComponent },

      {
        path: 'prueba2',
        component: OtherComponent,
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];
