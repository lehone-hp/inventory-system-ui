import { Component, OnInit } from '@angular/core';

import {Order} from '../../models/order';
import {Customer} from '../../models/customer';
import {Item} from '../../models/item';

import {OrderService} from '../../services/order.service';
import {CustomerService} from '../../services/customer.service';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];

  customers: Customer[];

  items: Item[];

  model = new OrderModel(0, 0, null);

  constructor(
    private orderService: OrderService,
    private customerService: CustomerService,
    private itemService: ItemService) { }

  ngOnInit() {
    this.getOrders();

    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers);

    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  getOrders(): void {
    this.orderService.getOrders()
      .subscribe(orders => this.orders = orders);
  }

  onSubmit(): void {
    this.orderService.addOrder(this.model);
  }

}

export class OrderModel {
  constructor(
    public itemId: number,
    public customerId: number,
    public quantity: number
  ) {}
}
