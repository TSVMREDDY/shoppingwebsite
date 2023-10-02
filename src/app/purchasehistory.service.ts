import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class PurchaseHistoryService {
  private purchaseHistory: {
    products: { product: Product; quantity: number; expiryDate: Date }[];
    date: Date;
  }[] = [];

  private purchaseHistorySubject: BehaviorSubject<
    {
      products: { product: Product; quantity: number; expiryDate: Date }[];
      date: Date;
    }[]
  > = new BehaviorSubject<
    {
      products: { product: Product; quantity: number; expiryDate: Date }[];
      date: Date;
    }[]
  >([]);

  private localStorageKey = 'purchaseHistory';

  constructor() {
    const savedHistory = localStorage.getItem(this.localStorageKey);
    if (savedHistory) {
      this.purchaseHistory = JSON.parse(savedHistory);
      this.updatePurchaseHistorySubject();
    }
  }

  private updateLocalStorage(): void {
    localStorage.setItem(
      this.localStorageKey,
      JSON.stringify(this.purchaseHistory)
    );
    this.updatePurchaseHistorySubject();
  }

  getPurchaseHistory(): {
    products: { product: Product; quantity: number; expiryDate: Date }[];
    date: Date;
  }[] {
    return this.purchaseHistory;
  }

  private updatePurchaseHistorySubject(): void {
    this.purchaseHistorySubject.next([...this.purchaseHistory]);
  }

  getPurchaseHistoryObservable(): Observable<
    {
      products: { product: Product; quantity: number; expiryDate: Date }[];
      date: Date;
    }[]
  > {
    return this.purchaseHistorySubject.asObservable();
  }

  addToPurchaseHistory(
    products: {
      product: Product;
      quantity: number;
      expiryDate: Date;
    }[],
    date: Date
  ): void {
    this.purchaseHistory.unshift({ products, date });
    this.updateLocalStorage();
  }
}
