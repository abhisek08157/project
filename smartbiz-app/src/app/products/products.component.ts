import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  editingId: number | null = null;
  editedProduct = { name: '', price: 0, stock: 0 };

  constructor(
  private productService: ProductService,
  public auth: AuthService // 👈 make it public for template access
) {}
  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.products = this.productService.getProducts();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.refresh();
  }

  startEdit(product: any) {
    this.editingId = product.id;
    this.editedProduct = { ...product };
  }

  saveEdit() {
    if (this.editingId !== null) {
      this.productService.updateProduct(this.editingId, this.editedProduct);
      this.editingId = null;
      this.refresh();
    }
  }

  cancelEdit() {
    this.editingId = null;
  }
}
