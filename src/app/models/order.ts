import {Item} from './item';
import {Customer} from './customer';

export class Order {
  id: number;
  item: Item;
  customer: Customer;
  quantity: number;
  totalPrice: number;
  date: Date;
}
