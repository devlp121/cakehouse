import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  auth: Observable<firebase.User>;

  constructor(
    public router: Router,
    public afAuth: AngularFireAuth,
  ) {
    this.auth = afAuth.authState;
  }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
      return new Promise(Resolve => {
        this.auth.subscribe(state => {
          if (state) {
            return Resolve(true);
          } else {
            this.router.navigate(['/login']);
            return Resolve(false);
          }
        })
      })
    }
}
