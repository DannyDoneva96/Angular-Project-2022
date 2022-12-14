import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  errorMessage: null | string = null;

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  //login method
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.isLoggedIn = true;
      this.router.navigate(['/']);
    }, err => {
      return this.errorMessage = err.message.split('/')[1].split(')')[0]
      // alert('Error')
      // this.router.navigate(['/login']);
    })
  };

  
  
  register(email: string,password: string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert('Success')
      this.router.navigate(['/login']);
    },err=>{return this.errorMessage = err.message.split('/')[1].split(')')[0]})
  }
  //sign out

  logout() {
      this.fireauth.signOut().then(() => {
        localStorage.removeItem('token')
        this.isLoggedIn = false
        this.router.navigate(['/login']);

      }, err => { alert(err.message) });
    }


 
}
