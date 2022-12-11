import { Component } from '@angular/core';
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
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public data: any = []
  constructor(public firestore: Firestore) {
  }

  addData(value: any) {
    const dbInstance = collection(this.firestore, 'messages');
    addDoc(dbInstance, value)
      .then(() => {
        alert('Data Sent')
      })
      .catch((err) => {
        
        alert(err.message)
      })
  }

}
