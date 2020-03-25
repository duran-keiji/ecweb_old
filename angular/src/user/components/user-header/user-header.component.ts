import { Component, OnInit } from '@angular/core';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  faAlignJustify = faAlignJustify;
  constructor() { }

  ngOnInit(): void {
  }

}
