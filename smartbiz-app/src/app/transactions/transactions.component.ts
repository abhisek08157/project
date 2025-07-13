import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions = [
    { id: 1, customer: 'Rajesh Kumar', amount: 2500, date: '2025-06-13' },
    { id: 2, customer: 'Neha Mishra', amount: 400, date: '2025-06-14' },
    { id: 3, customer: 'Manas Ranjan', amount: 1150, date: '2025-06-14' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
