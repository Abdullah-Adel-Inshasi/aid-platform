import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Donor } from './pages/donor/donor';
import { Recipient } from './pages/recipient/recipient';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'donor', component: Donor },
  { path: 'recipient', component: Recipient },
  { path: '**', redirectTo: '' },
];
