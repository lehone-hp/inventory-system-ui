import { Component, OnInit } from '@angular/core';
import {Item} from '../../models/item';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];

  model = new ItemModel('Chips', 0, 0, null);

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.items = items);
  }

  onSubmit(): void {
    this.itemService.addItem(this.model);
  }

}

export class ItemModel {
  constructor(
    public name: string,
    public code: number,
    public quantity: number,
    public price: number
  ) {};
}
