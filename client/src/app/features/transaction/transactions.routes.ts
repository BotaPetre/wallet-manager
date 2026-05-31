import { Routes } from '@angular/router';
import { TransactionsPage } from './transactions-page/transactions-page';

export const transactionRoutes: Routes = [
    {
        path: '',
        component: TransactionsPage
    }
];