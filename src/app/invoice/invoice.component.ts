import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { TdLoadingService } from '@covalent/core';
import { Customer } from '../services/customer';
import {Invoice} from '../services/invoice';
import {InvoicesService} from '../services/invoices.service';
import {CustomersService} from '../services/customers.service';
import { Observable, pipe, throwError } from 'rxjs';
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoice: Invoice;
  customer: Customer;

  constructor(
    private loadingService: TdLoadingService,
    private invoicesService: InvoicesService,
    private customersService: CustomersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadingService.register('invoice');


    this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('invoiceId')),
      switchMap(invoiceId => this.invoicesService.get<Invoice>(+invoiceId)),
      map((invoice: Invoice) => {
        this.invoice = invoice;
        return invoice.customerId;
      }),
      switchMap(customerId => this.customersService.get<Customer>(customerId))
      ).subscribe(customer => {
        this.customer = customer;
        this.loadingService.resolve('invoice');
      });
  }
}
