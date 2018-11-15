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



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAdminComponent } from './admin/admin-components/add-admin/add-admin.component';
import { AddCustomerComponent } from './admin/admin-components/add-customer/add-customer.component';
import { AddOrderComponent } from './admin/admin-components/add-order/add-order.component';
import { AddPageComponent } from './admin/admin-components/add-page/add-page.component';
import { AddPostComponent } from './admin/admin-components/add-post/add-post.component';
import { AddProductComponent } from './admin/admin-components/add-product/add-product.component';
import { AddProductCategoryComponent } from './admin/admin-components/add-product-category/add-product-category.component';
import { AdminComponent } from './admin/admin-components/admin/admin.component';
import { AdminAdminsComponent } from './admin/admin-components/admin-admins/admin-admins.component';
import { AdminApprovalsComponent } from './admin/admin-components/admin-approvals/admin-approvals.component';
import { AdminCustomersComponent } from './admin/admin-components/admin-customers/admin-customers.component';
import { AdminDashboardComponent } from './admin/admin-components/admin-dashboard/admin-dashboard.component';
import { AdminMenusComponent } from './admin/admin-components/admin-menus/admin-menus.component';
import { AdminOrdersComponent } from './admin/admin-components/admin-orders/admin-orders.component';
import { AdminPagesComponent } from './admin/admin-components/admin-pages/admin-pages.component';
import { AdminPostsComponent } from './admin/admin-components/admin-posts/admin-posts.component';
import { AdminProductCategoriesComponent } from './admin/admin-components/admin-product-categories/admin-product-categories.component';
import { AdminProductsComponent } from './admin/admin-components/admin-products/admin-products.component';
import { AdminThemeComponent } from './admin/admin-components/admin-theme/admin-theme.component';
import { ApproveDialogComponent } from './admin/admin-components/approve-dialog/approve-dialog.component';
import { DeleteDialogComponent } from './admin/admin-components/delete-dialog/delete-dialog.component';
import { CartComponent } from './storefront/cart/cart.component';
import { CartIconComponent } from './storefront/cart-icon/cart-icon.component';
import { CheckoutBillingComponent } from './storefront/checkout-billing/checkout-billing.component';
import { CheckoutConfirmationComponent } from './storefront/checkout-confirmation/checkout-confirmation.component';
import { CheckoutPaymentComponent } from './storefront/checkout-payment/checkout-payment.component';
import { CheckoutReviewComponent } from './storefront/checkout-review/checkout-review.component';
import { CheckoutShippingComponent } from './storefront/checkout-shipping/checkout-shipping.component';
import { LoginComponent } from './storefront/login/login.component';
import { NavComponent } from './storefront/nav/nav.component';
import { OrderComponent } from './storefront/order/order.component';
import { OrdersComponent } from './storefront/orders/orders.component';
import { PageComponent } from './storefront/page/page.component';
import { PagesComponent } from './storefront/pages/pages.component';
import { PostComponent } from './storefront/post/post.component';
import { PostsComponent } from './storefront/posts/posts.component';
import { ProductComponent } from './storefront/product/product.component';
import { ProductCategoriesComponent } from './storefront/product-categories/product-categories.component';
import { ProductCategoryComponent } from './storefront/product-category/product-category.component';
import { ProductsComponent } from './storefront/products/products.component';
import { SearchResultsComponent } from './storefront/search-results/search-results.component';
import { GetKeyPipe } from './pipes/get-key.pipe';
import { GetUserPipe } from './pipes/get-user.pipe';
import { ObjectCountPipe } from './pipes/object-count.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

import { environment } from '../environments/environment';
import { GlobalService } from '../app/services/global.service';
import { WindowRefService } from "../app/services/window-ref.service";
import { LocalCartService } from "../app/services/local-cart.service";
import { StopPropagationDirective } from './directives/stop-propagation.directive';
import { AngularFireDatabaseModule } from '@angular/fire/database';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    AddProductComponent,
    DeleteDialogComponent,
    AddAdminComponent,
    AddCustomerComponent,
    AddOrderComponent,
    GetKeyPipe,
    GetUserPipe,
    ObjectCountPipe,
    SafeHtmlPipe,
    SearchPipe,
    SortPipe,
    TruncatePipe,
    AddPageComponent,
    AddPostComponent,
    AddProductCategoryComponent,
    AdminComponent,
    AdminAdminsComponent,
    AdminApprovalsComponent,
    AdminCustomersComponent,
    AdminDashboardComponent,
    AdminMenusComponent,
    AdminOrdersComponent,
    AdminPagesComponent,
    AdminPostsComponent,
    AdminProductCategoriesComponent,
    AdminProductsComponent,
    AdminThemeComponent,
    ApproveDialogComponent,
    CartComponent,
    CartIconComponent,
    CheckoutBillingComponent,
    CheckoutConfirmationComponent,
    CheckoutPaymentComponent,
    CheckoutReviewComponent,
    CheckoutShippingComponent,
    OrderComponent,
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
    StopPropagationDirective
  ],
  imports: [
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
    AngularFireModule.initializeApp(environment.firebase,),
  ],
  exports: [
    GetKeyPipe,
    GetUserPipe,
    ObjectCountPipe,
    SafeHtmlPipe,
    SearchPipe,
    AngularFireDatabaseModule,
    SortPipe,
    TruncatePipe,]
    ,
  providers: [GlobalService, WindowRefService, LocalCartService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
