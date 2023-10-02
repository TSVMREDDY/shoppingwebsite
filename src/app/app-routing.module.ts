import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './productlist/productlist.component';
import { CartComponent } from './cart/cart.component';
import { PurchaseHistoryComponent } from './purchasehistory/purchasehistory.component';
import { InventoryManagementComponent } from './inventorymanagement/inventorymanagement.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'purchasehistory', component: PurchaseHistoryComponent },
  { path: 'inventorymanagement', component: InventoryManagementComponent },
  { path: '**', redirectTo: 'products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
