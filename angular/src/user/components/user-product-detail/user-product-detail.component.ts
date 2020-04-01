import { Component, OnInit } from '@angular/core';
import { SafeMethodCall } from '@angular/compiler';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

interface quantity {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-user-product-detail',
  templateUrl: './user-product-detail.component.html',
  styleUrls: ['./user-product-detail.component.css']
})
export class UserProductDetailComponent implements OnInit {
  faHeart = faHeart;

  quantitys: quantity[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
