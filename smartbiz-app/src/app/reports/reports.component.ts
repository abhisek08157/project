import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  totalCustomers = 5;
  totalProducts = 8;
  totalSales = 12000;
  totalDues = 1500;

  constructor() {}

  ngOnInit(): void {}
}
