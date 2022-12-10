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

 // get all messages

 getAllMessages(){
  return this.afs.collection('/messages').snapshotChanges()
 }

 //delete message

 deleteMessage(message:Message){
  return this.afs.doc('/messages/' + message.id).delete()
 }

 //update message
 updateMessage(message:Message){
  this.deleteMessage(message);
  this.addMessage(message);
 }

}
