import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customers/customer.service';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  showAddCustomer = false;
  showAddProduct = false;

  totalCustomers = 0;
  totalProducts = 0;

  constructor(
    private customerService: CustomerService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.refreshCounts();
  }

  refreshCounts(): void {
    this.totalCustomers = this.customerService.getCustomers().length;
    this.totalProducts = this.productService.getProducts().length;
  }

  onAddCustomerClosed(): void {
    this.showAddCustomer = false;
    this.refreshCounts();
  }

  onAddProductClosed(): void {
    this.showAddProduct = false;
    this.refreshCounts();
  }
}
