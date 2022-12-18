import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Message } from './model/message';
import { Order } from './model/order';

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
  addOrder(order:Order){
    order.id = this.afs.createId()
    return this.afs.collection('/orders').add(order)
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

 
 deleteOrder(order:Order){
  return this.afs.doc('/orders/' + order.id).delete()
 }
 updateOrder(order:Order){
  this.deleteOrder(order);
  this.addOrder(order);
 }

}
