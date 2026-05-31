import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./core/auth/login-page/login-page').then(p => p.LoginPage)
    },
    {
        path: 'register',
        loadComponent: () => import('./core/auth/register-page/register-page').then(p => p.RegisterPage)
    },
    {
        path: 'transactions',
        loadChildren: () => import('./features/transaction/transactions.routes').then(r => r.transactionRoutes)
    },
    {
        path: '**',
        loadComponent: () => import('./shared/components/not-found-page/not-found-page').then(p => p.NotFoundPage)
    }, // Place last, otherwise overwrites all paths
];
