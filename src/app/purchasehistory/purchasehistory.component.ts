import { Component, OnInit } from '@angular/core';
import { PurchaseHistoryService } from '../purchasehistory.service';
import { Product } from '../product.service';

@Component({
  selector: 'app-purchasehistory',
  templateUrl: './purchasehistory.component.html',
  styleUrls: ['./purchasehistory.component.scss'],
})
export class PurchaseHistoryComponent implements OnInit {
  purchaseHistory: {
    products: { product: Product; quantity: number; expiryDate: Date }[];
    date: Date;
  }[] = [];

  constructor(private purchaseHistoryService: PurchaseHistoryService) {}

  ngOnInit(): void {
    this.purchaseHistory = this.purchaseHistoryService.getPurchaseHistory();
  }

  calculateTotalPrice(
    products: { product: Product; quantity: number }[]
  ): number {
    return products.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
}
