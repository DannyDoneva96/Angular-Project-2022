import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../pages/auth/auth.service';
import {
  addDoc,
  Firestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from '@angular/fire/firestore'
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {


       isAdmine: boolean = false;
       user: boolean = false;
       public data: any = []
       orderId :any = ''
       

  constructor(public firestore: Firestore,public auth: AuthService) {
    this.getData()
  }

  ngOnInit() { 
    if(localStorage.getItem('user')!==null){
      const user = JSON.parse(localStorage.getItem('user')!);  
      this.user = user
      if(user.email == 'admin@abv.bg'){
        console.log('admin@abv.bg')
        this.isAdmine = true;
      }
      this.orderId = user.uid

    }
    
     
  }

  getData() {
    const dbInstance = collection(this.firestore, 'orders');
    getDocs(dbInstance)
      .then((response) => {
        this.data = [...response.docs.map((item) => {

          return { ...item.data(), id: item.id }
        })]
      })
      

  }

  
  deleteData(id: string) {
    const dataToDelete = doc(this.firestore, 'orders', id);
    deleteDoc(dataToDelete)
    .then(() => {
      alert('Order Deleted');
      this.getData()
    })
    .catch((err) => {
      alert(err.message)
    })
  }

}
