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

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
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
  quantity: string;
  subtotal: number;
  postage: number;
  totalPrice: number;
  delete: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { image: 1, productName: 'Hydrogen', unitPrice: 1.0079, quantity: 'H', subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 2, productName: 'Helium', unitPrice: 4.0026, quantity: 'He', subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 3, productName: 'Lithium', unitPrice: 6.941, quantity: 'Li', subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 4, productName: 'Beryllium', unitPrice: 9.0122, quantity: 'Be', subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 5, productName: 'Boron', unitPrice: 10.811, quantity: 'B', subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 6, productName: 'Carbon', unitPrice: 12.0107, quantity: 'C', subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 7, productName: 'Nitrogen', unitPrice: 14.0067, quantity: 'N', subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 8, productName: 'Oxygen', unitPrice: 15.9994, quantity: 'O', subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 9, productName: 'Fluorine', unitPrice: 18.9984, quantity: 'F', subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 10, productName: 'Neon', unitPrice: 20.1797, quantity: 'Ne', subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 11, productName: 'Sodium', unitPrice: 22.9897, quantity: 'Na', subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 12, productName: 'Magnesium', unitPrice: 24.305, quantity: 'Mg', subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 13, productName: 'Aluminum', unitPrice: 26.9815, quantity: 'Al', subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 14, productName: 'Silicon', unitPrice: 28.0855, quantity: 'Si', subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 15, productName: 'Phosphorus', unitPrice: 30.9738, quantity: 'P', subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 16, productName: 'Sulfur', unitPrice: 32.065, quantity: 'S', subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 17, productName: 'Chlorine', unitPrice: 35.453, quantity: 'Cl', subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 18, productName: 'Argon', unitPrice: 39.948, quantity: 'Ar', subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 19, productName: 'Potassium', unitPrice: 39.0983, quantity: 'K', subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
  { image: 20, productName: 'Calcium', unitPrice: 40.078, quantity: 'Ca', subtotal: 500, postage: 250, totalPrice: 750, delete: 0 },
];
