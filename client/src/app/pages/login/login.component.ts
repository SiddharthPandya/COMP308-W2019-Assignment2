/*   FileName: login.component.ts (Client)
     Student: Siddharth Pandya
     Student ID: 300915041
     Date: 03/04/2019 */

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = new User();
  }

  onLoginSubmit(): void {
    this.authService.authenticateUser(this.user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token,data.user);
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/home']);
      } else {
        this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/login']);
      }
    });
  }

}
