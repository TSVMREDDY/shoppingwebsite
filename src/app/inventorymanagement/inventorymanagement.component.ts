import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PurchaseHistoryService } from '../purchasehistory.service';

@Component({
  selector: 'app-inventorymanagement',
  templateUrl: './inventorymanagement.component.html',
  styleUrls: ['./inventorymanagement.component.scss'],
})
export class InventoryManagementComponent implements OnInit, OnDestroy {
  inventory: { productName: string; quantity: number }[] = [];
  private purchaseHistorySubscription: Subscription = new Subscription();

  constructor(private purchaseHistoryService: PurchaseHistoryService) {}

  ngOnInit(): void {
    this.purchaseHistorySubscription = this.purchaseHistoryService
      .getPurchaseHistoryObservable()
      .subscribe((purchaseHistory) => {
        this.updateInventoryFromPurchaseHistory(purchaseHistory);
      });
  }

  updateInventoryFromPurchaseHistory(purchaseHistory: any[]): void {
    this.inventory = [];

    for (const purchase of purchaseHistory) {
      for (const item of purchase.products) {
        const existingProduct = this.inventory.find(
          (invItem) => invItem.productName === item.product.name
        );

        if (existingProduct) {
          existingProduct.quantity += item.quantity;
        } else {
          this.inventory.push({
            productName: item.product.name,
            quantity: item.quantity,
          });
        }
      }
    }
  }

  increaseQuantity(productName: string): void {
    const product = this.inventory.find(
      (item) => item.productName === productName
    );
    if (product) {
      product.quantity++;
    }
  }

  decreaseQuantity(productName: string): void {
    const product = this.inventory.find(
      (item) => item.productName === productName
    );
    if (product && product.quantity > 0) {
      product.quantity--;
    }
  }

  getRefillMessage(productName: string): string {
    const product = this.inventory.find(
      (item) => item.productName === productName
    );
    if (product && product.quantity === 0) {
      return `Please refill ${productName}`;
    }
    return '';
  }

  ngOnDestroy(): void {
    this.purchaseHistorySubscription.unsubscribe();
  }
}
