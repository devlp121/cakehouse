import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { CartSheetComponent } from '../cart-sheet/cart-sheet.component';


@Component({

  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(private bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    this.bottomSheet.open(CartSheetComponent);
  }
}

