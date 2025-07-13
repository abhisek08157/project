import { Component, OnInit } from "@angular/core";
import { CustomerService } from "./customer.service";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: any[] = [];
  editingId: number | null = null;
  editedCustomer = { name: '', mobile: '', address: '' };

  constructor(
  private customerService: CustomerService,
  public auth: AuthService 
) {}
  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.customers = this.customerService.getCustomers();
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id);
    this.refresh();
  }

  startEdit(customer: any) {
    this.editingId = customer.id;
    this.editedCustomer = { ...customer };
  }

  saveEdit() {
    if (this.editingId !== null) {
      this.customerService.updateCustomer(this.editingId, this.editedCustomer);
      this.editingId = null;
      this.refresh();
    }
  }

  cancelEdit() {
    this.editingId = null;
  }
}
