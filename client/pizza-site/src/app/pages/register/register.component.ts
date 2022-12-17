import { Component, OnInit } from '@angular/core';
import { ignoreElements } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';
  PasMatch:string = '';
  errorMessageLog: null | string = null;

  constructor(private auth: AuthService) { }

  ngOnInit(): void { }

  
  register() {
    // console.log(this.PasMatch , this.email , this.password)
    // if(this.password !== this.PasMatch){
    //   this.errorMessageLog ='Passwords do not match!'
    //   return

   // }
    if (this.email == '') {
      this.errorMessageLog ='Please enter email'
      return
    }

    if (this.password == '') {
      this.errorMessageLog ='Please enter pass'
      return
    }

    

    this.errorMessageLog = this.auth.errorMessage 


    this.auth.register(this.email, this.password);
    this.email='';
    this.password='';
  }

}
