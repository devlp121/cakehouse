import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { AngularFireStorageReference } from "@angular/fire/storage";
import * as firebase from 'firebase/app'
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-admin-theme',
  templateUrl: './admin-theme.component.html',
  styleUrls: ['./admin-theme.component.scss']
})
export class AdminThemeComponent implements OnInit {

  theme: AngularFireObject<any>;
  siteName: string;
  file: any;
  newThumbnail: any;
  storageRef: any;
  imageUrl: any;

  constructor(public db: AngularFireDatabase, public snackBar: MatSnackBar) {
    this.theme = db.object('/theme');
  }

  ngOnInit() {
    this.theme.valueChanges().subscribe((item:any) => {
      if (item && item.siteName) {
        this.siteName = item.siteName;
      }
    });
  }

  uploadImage() {
    let storageRef = firebase.storage().ref();
    let path = Date.now().toString() + '-' + this.file.name;
    let imageRef = storageRef.child('theme/' + path);
    let me = this;
    imageRef.put(this.file).then((snapshot) => {
        this.snackBar.open('Image uploaded', 'OK!', {
          duration: 3000
        });
        this.storageRef.child('theme/' + path).getDownloadURL().then(function(url) {
          me.imageUrl = url;
          me.newThumbnail = url;
        });
    });
  }
  handleFiles(e) {
    this.file = e.srcElement.files[0];
    if (this.file.size > 2097152) {
      let snackBarRef = this.snackBar.open('Images must be 2 MB or less', 'OK!', {
        duration: 3000
      });
    } else {
      this.uploadImage();
    }
  }

  deleteImage() {
    this.newThumbnail = null;

    let storage = firebase.storage();
    let imageRef = storage.refFromURL(this.imageUrl);

    let me = this;
    imageRef.delete().then(function() {
      me.imageUrl = null;
    }).catch(function(error) {
      console.log('error', error);
    });
  }
  saveTheme(newSiteName: string) {
    this.theme.update({
      siteName: newSiteName
    });

    this.uploadImage();

    this.snackBar.open('Theme updated', 'OK!', {
      duration: 3000
    });
  }
}
