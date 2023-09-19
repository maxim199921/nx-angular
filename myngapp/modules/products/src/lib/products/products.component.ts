import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrdersComponent} from "orders";

@Component({
  selector: 'lib-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {}
