/*   FileName: contact.component.ts (Client)
     Student: Siddharth Pandya
     Student ID: 300915041
     Date: 03/04/2019 */

import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
    ) {
    super(route);
   }

  ngOnInit() {
  }

  isLoggedIn(): boolean{
    return this.authService.loggedIn();
  }

  onMessageSubmit(): void {
        
        this.flashMessage.show('Message Sent', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/home']);
     
  }

}
