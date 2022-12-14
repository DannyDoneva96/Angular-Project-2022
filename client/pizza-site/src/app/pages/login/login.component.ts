import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
   errorMessageLog: null | string = null;
  constructor(public auth: AuthService) { }

  ngOnInit(): void { }

  login() {
    if (this.email == '') {
      this.errorMessageLog = 'Please enter a valid email'
      return
    }

    if (this.password == '') {
      this.errorMessageLog = 'Please enter password'
      return
    }
    
    this.errorMessageLog = this.auth.errorMessage 


    this.auth.login(this.email, this.password);
    this.email='';
    this.password='';
  }


}