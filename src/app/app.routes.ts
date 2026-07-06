import { Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'onboarding', 
        pathMatch: 'full' 
    },
    { 
        path: 'onboarding', 
        canActivate: [MsalGuard],
        // canActivateChild:[MsalGuard],
        loadComponent : () =>{
            return import('./core/layout/home/home').then((m) => m.Home);
        }
    },
    {
        path: 'dashboard',
        canActivate: [MsalGuard],
        loadComponent: () =>
        import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
    }
];

