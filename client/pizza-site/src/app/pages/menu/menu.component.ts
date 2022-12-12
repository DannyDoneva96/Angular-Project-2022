import { Component, OnInit} from '@angular/core';
import {OrderDetailsService} from 'src/app/services/order-details.service'
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
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  {

  // constructor(private service: OrderDetailsService){}
  // foodData: any
  public data: any = []
  constructor(public firestore: Firestore) {
    this.getData()
  }

  // ngOnInit():void{
  //   this.foodData = this.service.foodDetails;
  // }

  getData() {
    const dbInstance = collection(this.firestore, 'mostOrdered');
    getDocs(dbInstance)
      .then((response) => {
        this.data = [...response.docs.map((item) => {
          return { ...item.data(), id: item.id }
        })]
      })
  }
}
