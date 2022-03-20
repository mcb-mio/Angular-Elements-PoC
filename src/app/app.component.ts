import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'login-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  @Input()
  companyName = 'Miovision';

  @Input()
  loginUrl: string;

  @Input()
  clientId: string;

  isAuthenticated: boolean;
  username: string;
  password: string;

  ngOnInit(): void {
    console.log(this.companyName, this.loginUrl, this.clientId);

    this.isAuthenticated = false;
  }

  async login(username, password) {
    try {
      if (username === 'admin' && password === 'password'){
        this.isAuthenticated = true;
        this.username = 'admin';
      } else {
        throw 'Could not handle login.';
      }
    } catch (error) {
      console.log(error);
    }
  }
}
