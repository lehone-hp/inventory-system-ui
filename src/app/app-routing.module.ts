import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CustomersComponent} from './components/customers/customers.component';
import {ItemsComponent} from './components/items/items.component';
import {OrdersComponent} from './components/orders/orders.component';

const routes: Routes = [
  {path: 'customers', component: CustomersComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'orders', component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
