import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  faAlignJustify = faAlignJustify;
  faSerch = faSearch;
  faBell = faBell;
  faShoppingCart = faShoppingCart;
  faUser = faUser;
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  routerTop() {
    this.router.navigate(['/top']);
  }

  addToCart(){
    this.router.navigate(['/cart']);
  }

}
