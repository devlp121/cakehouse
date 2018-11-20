import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Router }    from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { MatSnackBar } from '@angular/material';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  user: Observable<firebase.User>;
  currentAdmin: any;

  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public router: Router,
    public globalService: GlobalService,
    public snackBar: MatSnackBar,
    public title: Title,
  ) {
    this.user = afAuth.authState;
    this.currentAdmin = {};

  }

  ngOnInit() {
    this.user.subscribe(currentUser => {
      if (!currentUser) {
        this.router.navigateByUrl('login');
      } else {
        this.db.object('/admins/' + this.globalService.hashCode(currentUser.email)).valueChanges().subscribe((a:any) => {
          if (a && a.email) {
            this.globalService.admin.next(currentUser);
            this.db.object('/admins/' + currentUser.uid).valueChanges().subscribe((a:any) => {
              this.globalService.admin.next(a);
              this.currentAdmin.role = a.role;
            });
          } else {
            this.router.navigateByUrl('');
            let snackBarRef = this.snackBar.open('You are not an authorized administrator', 'OK!', {
              duration: 3000
            });
          }
        }, (err) => {
          console.log('Permission Error', err);
          this.router.navigateByUrl('');
          let snackBarRef = this.snackBar.open('You are not an authorized administrator', 'OK!', {
            duration: 3000
          });
        });
      }
    });

    this.title.setTitle('Admin')
  }


  logout() {
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('');
  }

}

