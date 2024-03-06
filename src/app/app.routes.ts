import { Routes } from '@angular/router';
import { HomeComponent } from './domain/pages/home/home.component';

import { HeaderComponent } from './domain/pages/shared/header/header.component';
import { TestComponent } from './domain/test/test.component';

export const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [{ path: '', component: HomeComponent }],
  },
  {
    path: 'test',
    component: TestComponent,
  },

  {
    path: '**',
    redirectTo: '',
  },
];
