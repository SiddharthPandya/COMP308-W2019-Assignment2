/*   FileName: home.component.ts (Client)
     Student: Siddharth Pandya
     Student ID: 300915041
     Date: 03/04/2019 */

import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute) { 
    super(route);
  }

  ngOnInit() {
  }

}
