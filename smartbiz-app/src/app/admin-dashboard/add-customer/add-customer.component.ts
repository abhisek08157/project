import { Component, EventEmitter, Output } from '@angular/core';
import { CustomerService } from '../../customers/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  name = '';
  mobile = '';
  address = '';

  @Output() cancel = new EventEmitter<void>();

  constructor(private customerService: CustomerService) {}

  addCustomer() {
    this.customerService.addCustomer({
      name: this.name,
      mobile: this.mobile,
      address: this.address
    });
    this.cancel.emit();
  }
}
