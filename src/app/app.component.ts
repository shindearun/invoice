import { Component } from '@angular/core';
import {InvoicesService} from './services/invoices.service';
import {CustomersService} from './services/customers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    CustomersService,
    InvoicesService
  ]
})
export class AppComponent { }
