import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CreateTransaction } from "../create-transaction/create-transaction";

@Component({
  selector: 'transactions-page',
  imports: [NzButtonModule, CreateTransaction],
  templateUrl: './transactions-page.html',
  styleUrl: './transactions-page.css',
})
export class TransactionsPage {

}
