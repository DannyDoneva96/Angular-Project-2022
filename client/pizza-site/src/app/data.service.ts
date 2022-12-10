import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Message } from './model/message';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs:AngularFirestore) { }


  // add messages
  addMessage(message:Message){
    message.id = this.afs.createId()
    return this.afs.collection('/messages').add(message)
  }
}
