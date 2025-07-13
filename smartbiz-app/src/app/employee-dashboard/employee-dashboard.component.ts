import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customers/customer.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  showAddCustomer = false;
  totalCustomers = 0;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.refreshCustomerCount();
  }

  refreshCustomerCount(): void {
    this.totalCustomers = this.customerService.getCustomers().length;
  }

  onAddCustomerClosed(): void {
    this.showAddCustomer = false;
    this.refreshCustomerCount();
  }
}
