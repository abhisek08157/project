import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../products/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  name = '';
  price: number = 0;
  stock: number = 0;

  @Output() cancel = new EventEmitter<void>();

  constructor(private productService: ProductService) {}

  addProduct() {
    this.productService.addProduct({
      name: this.name,
      price: this.price,
      stock: this.stock
    });
    this.cancel.emit();
  }
}
