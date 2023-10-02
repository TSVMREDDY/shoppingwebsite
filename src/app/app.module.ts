import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './productlist/productlist.component';
import { CartService } from './cart.service';
import { RouterModule } from '@angular/router';
import { PurchaseHistoryComponent } from './purchasehistory/purchasehistory.component';
import { PurchaseHistoryService } from './purchasehistory.service';
import { InventoryManagementComponent } from './inventorymanagement/inventorymanagement.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductListComponent,
    PurchaseHistoryComponent,
    InventoryManagementComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [CartService, PurchaseHistoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
