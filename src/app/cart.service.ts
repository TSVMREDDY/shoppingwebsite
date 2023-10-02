import { Injectable } from '@angular/core';
import { Product } from './product.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: {
    product: Product;
    quantity: number;
    expiryDate: Date;
  }[] = [];
  private cartItemsSubject: BehaviorSubject<
    { product: Product; quantity: number; expiryDate: Date }[]
  > = new BehaviorSubject<
    { product: Product; quantity: number; expiryDate: Date }[]
  >([]);

  constructor() {}

  getCartItems() {
    return this.cartItemsSubject.asObservable();
  }

  addToCart(product: Product, expiryDate: Date): void {
    const existingItem = this.cartItems.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1, expiryDate });
    }

    this.cartItemsSubject.next([...this.cartItems]); // Emit the updated cart items
  }

  decreaseQuantity(item: {
    product: Product;
    quantity: number;
    expiryDate: Date;
  }): void {
    const existingItem = this.cartItems.find(
      (i) => i.product.id === item.product.id
    );

    if (existingItem) {
      existingItem.quantity--;
      if (existingItem.quantity === 0) {
        this.removeFromCart(item.product);
      }
      this.cartItemsSubject.next([...this.cartItems]); // Emit the updated cart items
    }
  }

  removeFromCart(product: Product): void {
    const index = this.cartItems.findIndex(
      (item) => item.product.id === product.id
    );

    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.cartItemsSubject.next([...this.cartItems]); // Emit the updated cart items
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartItemsSubject.next([]); // Emit the updated cart items
  }

  calculateTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
}
