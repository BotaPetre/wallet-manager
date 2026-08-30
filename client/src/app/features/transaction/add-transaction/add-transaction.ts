import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { form, FormField, required, minLength, maxLength, min} from '@angular/forms/signals';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { SignalFormError } from '../../../shared/components/signal-form-error/signal-form-error';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

interface IAddTransaction {
  createDate: Date;
  amount: number;
  currency: string;
  category: string;
  note: string;
}

@Component({
  selector: 'add-transaction',
  imports: [FormField, NzButtonModule, NzFormModule, NzCardModule, NzDatePickerModule, SignalFormError],
  templateUrl: './add-transaction.html',
  styleUrl: './add-transaction.css',
})
export class AddTransaction {

  private addTransactionModel = signal<IAddTransaction>({
    createDate: new Date(),
    amount: 0,
    currency: 'RON',
    category: '',
    note: '',
  });

  trForm = form(this.addTransactionModel, (schemaPath) => {
    required(schemaPath.createDate, {message: 'Date is required'});
    required(schemaPath.amount, {message: 'Amount is required'});
    min(schemaPath.amount, 0, { message: 'Amount cannot be a negative number' })
    required(schemaPath.currency, {message: 'Currency is required'});
    required(schemaPath.category, {message: 'Category is required'});
    minLength(schemaPath.category, 3, { message: 'Category must be at least 3 characters' });
    maxLength(schemaPath.category, 256, { message: 'Category can have maximum 256 characters' });
  });

  submitNewTransaction(event: Event) {
    event.preventDefault();
     
    console.log(this.trForm().value())
  }

}
