import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';
import { TdLoadingService } from '@covalent/core';
import {Customer} from '../services/customer';
import {CustomersService} from '../services/customers.service';
import { Observable, pipe, throwError } from 'rxjs';
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: Customer;

  constructor(
    private customersService: CustomersService,
    private loadingService: TdLoadingService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadingService.register('customer');
    this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('customerId'))
      , switchMap(customerId => this.customersService.get<Customer>(+customerId))
      ).subscribe(customer => {
        this.customer = customer;
        this.loadingService.resolve('customer');
      });
  }
}
