import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {
  displayedColumns: string[] = ['image', 'productName', 'unitPrice', 'quantity', 'subtotal', 'postage', 'totalPrice', 'delete'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selected = "option1";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.dataSource.filteredData);
  }

  goToTop() {
    this.router.navigate(['/top']);
  }

  goToComfirm() {
    this.router.navigate(['/productDetail']);
  }

}

export interface PeriodicElement {
  productName: string;
  image: number;
  unitPrice: number;
  quantity: number;
  subtotal: number;
  postage: number;
  totalPrice: number;
  delete: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { image: 1, productName: 'Hydrogen', unitPrice: 1000, quantity: 4, subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 2, productName: 'Helium', unitPrice: 1000, quantity: 2, subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 3, productName: 'Lithium', unitPrice: 1000, quantity: 3, subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 4, productName: 'Beryllium', unitPrice: 1000, quantity: 1, subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 5, productName: 'Boron', unitPrice: 1000, quantity: 1, subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 6, productName: 'Carbon', unitPrice: 1000, quantity: 1, subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 7, productName: 'Nitrogen', unitPrice: 1000, quantity: 1, subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 8, productName: 'Oxygen', unitPrice: 1000, quantity: 1, subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 9, productName: 'Fluorine', unitPrice: 1000, quantity: 1, subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 10, productName: 'Neon', unitPrice: 1000, quantity: 1, subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 11, productName: 'Sodium', unitPrice: 1000, quantity: 1, subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 12, productName: 'Magnesium', unitPrice: 1000, quantity: 1, subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 13, productName: 'Aluminum', unitPrice: 1000, quantity: 1, subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 14, productName: 'Silicon', unitPrice: 1000, quantity: 1, subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 15, productName: 'Phosphorus', unitPrice: 1000, quantity: 1, subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 16, productName: 'Sulfur', unitPrice: 1000, quantity: 1, subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 17, productName: 'Chlorine', unitPrice: 1000, quantity: 1, subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 18, productName: 'Argon', unitPrice: 1000, quantity: 1, subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 19, productName: 'Potassium', unitPrice: 1000, quantity: 1, subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 20, productName: 'Calcium', unitPrice: 1000, quantity: 1, subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
];
