/*   FileName: footer.component.ts (Client)
     Student: Siddharth Pandya
     Student ID: 300915041
     Date: 03/04/2019 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: number;

  constructor() { }

  ngOnInit() {
    const date = new Date();
    this.year = date.getFullYear();
  }

}
