import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './storefront/cart/cart.component';
import { CartIconComponent } from './storefront/cart-icon/cart-icon.component';
import { CheckoutBillingComponent } from './storefront/checkout-billing/checkout-billing.component';
import { CheckoutConfirmationComponent } from './storefront/checkout-confirmation/checkout-confirmation.component';
import { CheckoutPaymentComponent } from './storefront/checkout-payment/checkout-payment.component';
import { CheckoutReviewComponent } from './storefront/checkout-review/checkout-review.component';
import { CheckoutShippingComponent } from './storefront/checkout-shipping/checkout-shipping.component';
import { LoginComponent } from './storefront/login/login.component';
import { NavComponent } from './storefront/nav/nav.component';
import { PageComponent } from './storefront/page/page.component';
import { PagesComponent } from './storefront/pages/pages.component';
import { PostComponent } from './storefront/post/post.component';
import { PostsComponent } from './storefront/posts/posts.component';
import { ProductComponent } from './storefront/product/product.component';
import { ProductCategoriesComponent } from './storefront/product-categories/product-categories.component';
import { ProductCategoryComponent } from './storefront/product-category/product-category.component';
import { ProductsComponent } from './storefront/products/products.component';
import { SearchResultsComponent } from './storefront/search-results/search-results.component';

import { environment } from '../environments/environment';
import { GlobalService } from '../app/services/global.service';
import { WindowRefService } from "../app/services/window-ref.service";
import { LocalCartService } from "../app/services/local-cart.service";
import { StopPropagationDirective } from './directives/stop-propagation.directive';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared.module';
import { OrdersComponent } from './storefront/orders/orders.component'
import { CartSheetComponent } from "./storefront/cart-sheet/cart-sheet.component";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    CartComponent,
    CartIconComponent,
    CheckoutBillingComponent,
    CheckoutConfirmationComponent,
    CheckoutPaymentComponent,
    CheckoutReviewComponent,
    CheckoutShippingComponent,
    OrdersComponent,
    PageComponent,
    PagesComponent,
    PostComponent,
    PostsComponent,
    ProductComponent,
    ProductCategoriesComponent,
    ProductCategoryComponent,
    ProductsComponent,
    SearchResultsComponent,
    StopPropagationDirective,
    CartSheetComponent
  ],
  imports: [
    BrowserModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    AngularFireAuthModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatStepperModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase, ),
    AdminRoutingModule,
    AdminModule,
    SharedModule,
    MatBottomSheetModule
    
  ],
  exports: [
    StopPropagationDirective,
    AngularFireDatabaseModule,
]
    ,
  providers: [GlobalService, WindowRefService, LocalCartService ],
  entryComponents:[ CartSheetComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
