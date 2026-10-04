import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { form, FormField, required, minLength, maxLength, min} from '@angular/forms/signals';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { SignalFormError } from '../../../shared/components/signal-form-error/signal-form-error';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { ApiService } from '../../../shared/services/api.service';

interface ICreateTransaction {
  createdAt: Date;
  amount: number | null;
  currencyCode: string;
  category: string;
  note: string;
}

const defaultTransaction: ICreateTransaction = {
  createdAt: new Date(),
  amount: null,
  currencyCode: 'RON',
  category: '',
  note: '',
}

@Component({
  selector: 'create-transaction',
  imports: [FormField, NzButtonModule, NzFormModule, NzCardModule, NzDatePickerModule, SignalFormError],
  templateUrl: './create-transaction.html',
  styleUrl: './create-transaction.css',
})
export class CreateTransaction {
  constructor (private apiService: ApiService) {}  

  private createTransactionModel = signal<ICreateTransaction>({ ...defaultTransaction });

  trForm = form(this.createTransactionModel, (schemaPath) => {
    required(schemaPath.createdAt, {message: 'Date is required'});
    required(schemaPath.amount, {message: 'Amount is required'});
    min(schemaPath.amount, 0, { message: 'Amount cannot be a negative number' })
    required(schemaPath.currencyCode, {message: 'Currency is required'});
    minLength(schemaPath.currencyCode, 3, { message: 'Currency must be at least 3 characters' });
    required(schemaPath.category, {message: 'Category is required'});
    minLength(schemaPath.category, 3, { message: 'Category must be at least 3 characters' });
    maxLength(schemaPath.category, 256, { message: 'Category can have maximum 256 characters' });
  });

  createTransaction(event: Event) {
    event.preventDefault();

    const transaction = this.trForm().value();

    this.apiService.createTransaction(transaction).subscribe({
      next: (res) => {
        console.log('Tr added', res)

        // Reset form
        this.createTransactionModel.set({ ...defaultTransaction })
        this.trForm().reset();
      },
    });
  }

}
