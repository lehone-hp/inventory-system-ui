import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import {Item} from '../models/item';
import {ItemModel} from '../components/items/items.component';

@Injectable()
export class ItemService {

  private ITEMS: Item[] = [
    {id: 10, name: 'Cornflakes', code: 441125044, quantity: 16, price: 1850},
    {id: 11, name: 'Tomatoe Paste', code: 45887123, quantity: 130, price: 100}
  ];

  private BASEURL = 'http://localhost:8080/items';

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.BASEURL);
  }

  getItem(id: number): Observable<Item> {
    const url = `${this.BASEURL}/items/${id}`;
    return this.http.get<Item>(url);
  }

  addItem(itemModel: ItemModel): void {
    const url = `${this.BASEURL}/add`;
    this.http.get<string>(url, {
      params: new HttpParams().set('name', itemModel.name)
        .set('code', `${itemModel.code}`)
        .set('quantity', `${itemModel.quantity}`)
        .set('price', `${itemModel.price}`)
    }).subscribe(message => console.debug(message));
  }

}
