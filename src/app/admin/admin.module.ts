import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import 'firebase/storage';
import * as firebase from 'firebase';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
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

import { ReactiveFormsModule} from '@angular/forms';
import { FormGroup }   from '@angular/forms';


import { AdminComponent } from './admin-components/admin/admin.component';
import { AddPostComponent } from './admin-components/add-post/add-post.component';
import { AdminPostsComponent } from './admin-components/admin-posts/admin-posts.component';
import { AdminAdminsComponent } from './admin-components/admin-admins/admin-admins.component';
import { AdminDashboardComponent } from './admin-components/admin-dashboard/admin-dashboard.component';
import { AddAdminComponent } from './admin-components/add-admin/add-admin.component';
import { AdminPagesComponent } from './admin-components/admin-pages/admin-pages.component';
import { AddPageComponent } from './admin-components/add-page/add-page.component';
import { AdminMenusComponent } from './admin-components/admin-menus/admin-menus.component';
import { AdminThemeComponent } from './admin-components/admin-theme/admin-theme.component';
import { AdminProductsComponent } from './admin-components/admin-products/admin-products.component';
import { AddProductComponent } from './admin-components/add-product/add-product.component';
import { DeleteDialogComponent } from './admin-components/delete-dialog/delete-dialog.component';
import { AdminCustomersComponent } from './admin-components/admin-customers/admin-customers.component';
import { AddOrderComponent } from './admin-components/add-order/add-order.component';
import { AddCustomerComponent } from './admin-components/add-customer/add-customer.component';
import { AdminOrdersComponent } from './admin-components/admin-orders/admin-orders.component';
import { AdminProductCategoriesComponent } from './admin-components/admin-product-categories/admin-product-categories.component';
import { AddProductCategoryComponent } from './admin-components/add-product-category/add-product-category.component';
import { AdminApprovalsComponent } from './admin-components/admin-approvals/admin-approvals.component';
import { ApproveDialogComponent } from './admin-components/approve-dialog/approve-dialog.component';

import { AuthGuard } from '../services/auth.guard';
import { SuperAdminGuard } from '../services/super-admin.service'
import { AdminGuard } from '../services/admin.guard';

import { AdminRoutingModule } from './admin-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatButtonModule,
    SharedModule
  ],
  declarations: [
    AddAdminComponent,
    AddCustomerComponent,
    AddPostComponent,
    AddPageComponent,
    AddOrderComponent,
    AddProductComponent,
    AddProductCategoryComponent,
    AdminComponent,
    AdminDashboardComponent,
    AdminAdminsComponent,
    AdminApprovalsComponent,
    AdminCustomersComponent,
    AdminMenusComponent,
    AdminOrdersComponent,
    AdminPagesComponent,
    AdminPostsComponent,
    AdminProductCategoriesComponent,
    AdminProductsComponent,
    AdminThemeComponent,
    DeleteDialogComponent,
    ApproveDialogComponent,
    
  ],
  providers: [AuthGuard, SuperAdminGuard, AdminGuard],
  entryComponents: [DeleteDialogComponent, ApproveDialogComponent],
})
export class AdminModule { }