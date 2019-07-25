import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentLayoutModule, CovalentStepsModule, CovalentDialogsModule, CovalentLoadingModule } from '@covalent/core';
import { AppRoutingModule } from './app-routing.module';

import {
  MatIconModule,
  MatSelectModule,
  MatListModule,
  MatButtonModule,
  MatInputModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
  NativeDateModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CustomerComponent } from './customer/customer.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { PhoneDirective } from './validators/phone.directive';
import { HoursControlComponent } from './hours-control/hours-control.component';
import { HoursDirective } from './validators/hours.directive';



@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    InvoicesComponent,
    InvoiceComponent,
    CustomerComponent,
    InvoiceFormComponent,
    CustomerFormComponent,
    PhoneDirective,
    HoursControlComponent,
    HoursDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    NativeDateModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
