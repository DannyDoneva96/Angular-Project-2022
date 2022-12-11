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
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  public data: any = []
  constructor(public firestore: Firestore) {
    this.getData()
  }

 
  getData() {
    const dbInstance = collection(this.firestore, 'messages');
    getDocs(dbInstance)
      .then((response) => {
        this.data = [...response.docs.map((item) => {
          return { ...item.data(), id: item.id }
        })]
      })
  }

  deleteData(id: string) {
    const dataToDelete = doc(this.firestore, 'messages', id);
    deleteDoc(dataToDelete)
    .then(() => {
      alert('Message Deleted');
      this.getData()
    })
    .catch((err) => {
      alert(err.message)
    })
  }

}
