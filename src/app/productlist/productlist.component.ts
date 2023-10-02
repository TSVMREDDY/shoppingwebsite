import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = []; // Initialize the array

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product): void {
    // Implement adding the product to the cart
    console.log('Adding to cart:', product);
    const expiryDate = new Date();
    this.cartService.addToCart(product, expiryDate);
  }
}
