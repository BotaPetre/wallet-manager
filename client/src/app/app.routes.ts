import { Routes } from '@angular/router';
import { PageLayout } from './core/layout/page-layout/page-layout';

export const routes: Routes = [
    // Public 
    {
        path: '',
        loadComponent: () => import('./core/auth/login-page/login-page').then(p => p.LoginPage)
    },
    {
        path: 'register',
        loadComponent: () => import('./core/auth/register-page/register-page').then(p => p.RegisterPage)
    },

    // Protected
    {
        path: '',
        component: PageLayout,
        // TODO: add canActivate authGuard
        children: [
            {
                path: 'transactions',
                loadChildren: () => import('./features/transaction/transactions.routes').then(r => r.transactionRoutes)
            }
        ]
    },

    // Fallback (placed last, otherwise overwrites all paths)
    {
        path: '**',
        loadComponent: () => import('./shared/components/not-found-page/not-found-page').then(p => p.NotFoundPage)
    },
];
