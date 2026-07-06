import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { MsalGuard } from '@azure/msal-angular';

export const routes: Routes = [
    { path: 'home', component: Home, canActivate: [MsalGuard] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
