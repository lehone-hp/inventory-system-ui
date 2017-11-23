import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import {Customer} from '../models/customer';
import {CustomerModel} from '../components/customers/customers.component';

@Injectable()
export class CustomerService {

  private CUSTOMERS: Customer[] = [
    {id: 10, firstName: 'Lenya', lastName: 'Hope', phone: 1234456789, address: 'Sandpit - Buea'}
  ];

  private BASEURL = 'http://localhost:8080/customers';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    const url = `${this.BASEURL}`;
    return this.http.get<Customer[]>(url);
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.BASEURL);
  }

  addCustomer(customerModel: CustomerModel): void {
    const url = `${this.BASEURL}/add`;
    this.http.get<string>(url, {
      params: new HttpParams().set('firstName', customerModel.firstName)
        .set('lastName', customerModel.lastName)
        .set('phone', `${customerModel.phone}`)
        .set('address', customerModel.address)
    }).subscribe(message => console.debug(message));
  }
}
