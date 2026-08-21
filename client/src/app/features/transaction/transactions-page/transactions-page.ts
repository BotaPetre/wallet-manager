import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AddTransaction } from "../add-transaction/add-transaction";

@Component({
  selector: 'transactions-page',
  imports: [NzButtonModule, AddTransaction],
  templateUrl: './transactions-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './transactions-page.css',
})
export class TransactionsPage {

}
