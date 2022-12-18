import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../pages/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: any = false;
  constructor(public auth: AuthService) { }


  ngOnInit() { 
    if(localStorage.getItem('token')!==null)
    
      this.isLoggedIn = true;
   
  }



  

  logout(){
    this.auth.logout();

  }
}
