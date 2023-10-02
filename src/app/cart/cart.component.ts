import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { PurchaseHistoryService } from '../purchasehistory.service';
import { Product } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: { product: Product; quantity: number; expiryDate: Date }[] = [];

  constructor(
    private cartService: CartService,
    private purchaseHistoryService: PurchaseHistoryService
  ) {}

  ngOnInit(): void {
    // Subscribe to the cart items observable
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });
  }

  decreaseQuantity(item: {
    product: Product;
    quantity: number;
    expiryDate: Date;
  }): void {
    if (item.quantity > 1) {
      this.cartService.decreaseQuantity(item);
    } else {
      this.removeFromCart(item);
    }
  }

  increaseQuantity(item: {
    product: Product;
    quantity: number;
    expiryDate: Date;
  }): void {
    this.cartService.addToCart(item.product, item.expiryDate);
  }

  removeFromCart(item: {
    product: Product;
    quantity: number;
    expiryDate: Date;
  }): void {
    this.cartService.removeFromCart(item.product);
  }

  calculateTotalPrice(): number {
    return this.cartService.calculateTotalPrice();
  }

  checkout(): void {
    this.purchaseHistoryService.addToPurchaseHistory(
      this.cartItems,
      new Date()
    );
    this.cartService.clearCart();
  }
}
