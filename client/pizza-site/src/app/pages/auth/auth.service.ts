import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {User } from './user'
import * as auth from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  errorMessage: null | string = null;
  userData: any; // Save logged in user data


  constructor(private fireauth: AngularFireAuth, private router: Router){
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.fireauth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
}

  //login method
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then((result) => {
      this.SetUserData(result.user);
      localStorage.setItem('token', 'true');
      this.isLoggedIn = true;
      this.router.navigate(['/']);
    }, err => {
      return this.errorMessage = err.message.split('/')[1].split(')')[0]
      // alert('Error')
      // this.router.navigate(['/login']);
    })
  };

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
   
    const userData: User = {
      uid: user.uid,
      email: user.email,
     
    };
    
   
  }
  
  register(email: string,password: string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert('Success')
      this.router.navigate(['/login']);
    },err=>{return this.errorMessage = err.message.split('/')[1].split(')')[0]})
  }
  //sign out

  logout() {
      this.fireauth.signOut().then(() => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        this.isLoggedIn = false
        this.router.navigate(['/login']);

      }, err => { alert(err.message) });
    }


 
}
