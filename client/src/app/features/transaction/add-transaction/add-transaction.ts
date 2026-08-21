import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { form, FormField, required, minLength, maxLength} from '@angular/forms/signals';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormItemComponent, NzFormLabelComponent, NzFormModule } from 'ng-zorro-antd/form';

interface IAddTransaction {
  createDate: string;
  amount: number;
  currency: string;
  category: string;
  note: string;
}

@Component({
  selector: 'add-transaction',
  imports: [FormField, NzButtonModule, NzFormModule],
  templateUrl: './add-transaction.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './add-transaction.css',
})
export class AddTransaction {

  private addTransactionModel = signal<IAddTransaction>({
    createDate: '',
    amount: 0,
    currency: 'RON',
    category: '',
    note: '',
  });

  trForm = form(this.addTransactionModel, (schemaPath) => {
    required(schemaPath.createDate, {message: 'Date is required'});
    required(schemaPath.amount, {message: 'Amount is required'});
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
