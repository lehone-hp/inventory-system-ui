import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {Order} from '../models/order';
import {Customer} from '../models/customer';
import {Item} from '../models/item';

import {Observable} from 'rxjs/Observable';

import {OrderModel} from '../components/orders/orders.component';

@Injectable()
export class OrderService {

  item: Item = {id: 21, name: 'Milk', code: 987452145, quantity: 500, price: 2500};
  customer: Customer = {id: 20, firstName: 'John', lastName: 'Doe', phone: 10124580, address: 'New Town, Limbe'};

  private orders: Order[] = [
    {id: 1, item: this.item, customer: this.customer, quantity: 5, totalPrice: 12500, date: null}
  ];

  private BASEURL = 'http://localhost:8080/orders';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    const url = `${this.BASEURL}`;
    return this.http.get<Order[]>(url);
  }

  getOrder(id: number): Observable<Order> {
    const url = `${this.BASEURL}${id}`;
    return this.http.get<Order>(url);
  }

  addOrder(orderModel: OrderModel): void {
    const url = `${this.BASEURL}/add`;
    this.http.get<string>(url, {
      params: new HttpParams().set('itemId', `${orderModel.itemId}`)
        .set('customerId', `${orderModel.customerId}`)
        .set('quantity', `${orderModel.quantity}`)
    }).subscribe(message => console.debug(message));
  }

}
