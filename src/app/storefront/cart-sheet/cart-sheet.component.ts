import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { Router }    from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';
import { LocalCartService } from 'src/app/services/local-cart.service';

@Component({
  selector: 'app-cart-sheet',
  templateUrl: './cart-sheet.component.html',
  styleUrls: ['./cart-sheet.component.scss']
})

export class CartSheetComponent implements OnInit {
  globalCart: any;
  cartArray: any;
  cartTotal: Number;
  user: Observable<firebase.User>;
  currentShopper: any;
  review: boolean;

  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public router: Router,
    public snackBar: MatSnackBar,
    public globalService: GlobalService,
    public localCart: LocalCartService,
    private title: Title,
    private meta: Meta,
    private bottomSheetRef: MatBottomSheetRef<CartSheetComponent>
  ) {
    this.user = afAuth.authState;
    this.cartArray = [];
    this.cartTotal = 0;
    this.review = false;

    globalService.cart.subscribe((cart) => {
      this.cartArray = [];
      this.cartTotal = 0;
      this.globalCart = cart;
      if (this.globalCart) {
        this.cartArray = (<any>Object).values(this.globalCart);
        for (let i = 0; i < this.cartArray.length; i++) {
          this.cartTotal += this.cartArray[i].total;
        }
        globalService.order.next({items: this.cartArray, shipping: {}, billing: {}, total: this.cartTotal});
      }
    });
  }

  ngOnInit() {
    this.title.setTitle('Cart');
    this.meta.updateTag({ content: 'View and edit the shopping cart' }, "name='description'");

    if (this.router.url.includes('review')) {
      this.review = true;
    }
  }
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  updateCart(item) {
    this.globalCart[item.entityKey] = item;
    this.globalCart[item.entityKey]['total'] = (item.quantity * item.price);
    this.globalService.cart.next(this.globalCart);
  }

  removeItem(item) {
    delete this.globalCart[item.entityKey];
    this.globalService.cart.next(this.globalCart);

    this.user.subscribe((currentShopper) => {
      if (Object.keys(this.globalCart).length === 0) {
        this.localCart.clearCart();
        if (currentShopper) {
          this.db.object('/users/' + currentShopper.uid).update({
            cart: null
          });
        }
      }
    });

    let snackBarRef = this.snackBar.open('Item removed', 'OK!', {
      duration: 3000
    });
  }
}

