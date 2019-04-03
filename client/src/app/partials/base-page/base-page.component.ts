/*   FileName: base-page.component.ts (Client)
     Student: Siddharth Pandya
     Student ID: 300915041
     Date: 03/04/2019 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.css']
})
export class BasePageComponent implements OnInit {

  title: string;

  constructor(private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.title = this.route.snapshot.data.title;
  }

}
