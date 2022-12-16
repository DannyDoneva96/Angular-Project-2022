import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../pages/auth/auth.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
       isAdmine: boolean = false;
       isOwner: boolean = false;

  constructor(public auth: AuthService) { }


  ngOnInit() { 
    if(localStorage.getItem('user')!==null){
      const user = JSON.parse(localStorage.getItem('user')!);  
      if(user.email == 'admin@abv.bg'){
        this.isAdmine = true;
      }
    }
    
     
  }




}
