import { Component, OnInit } from '@angular/core';

import {CustomerService } from '../../services/customer.service';
import {Customer} from '../../models/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];

  model = new CustomerModel('John', 'Doe', 671236547, null);

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers()
        .subscribe(customers => this.customers = customers);
  }

  onSubmit(): void {
    this.customerService.addCustomer(this.model);
  }

}

export class CustomerModel {
  constructor(
    public firstName: string,
    public lastName: string,
    public phone: number,
    public address: string
  ) {}
}
