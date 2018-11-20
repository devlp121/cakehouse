import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from 'src/app/storefront/posts/posts.component';
import { PagesComponent } from 'src/app/storefront/pages/pages.component';
import { PageComponent } from 'src/app/storefront/page/page.component';
import { PostComponent } from 'src/app/storefront/post/post.component';
import { ProductsComponent } from 'src/app/storefront/products/products.component';
import { ProductComponent } from 'src/app/storefront/product/product.component';
import { CartComponent } from 'src/app/storefront/cart/cart.component';
import { CartIconComponent } from 'src/app/storefront/cart-icon/cart-icon.component';
import { CheckoutShippingComponent } from 'src/app/storefront/checkout-shipping/checkout-shipping.component';
import { CheckoutBillingComponent } from 'src/app/storefront/checkout-billing/checkout-billing.component';
import { CheckoutPaymentComponent } from 'src/app/storefront/checkout-payment/checkout-payment.component';
import { CheckoutReviewComponent } from 'src/app/storefront/checkout-review/checkout-review.component';
import { CheckoutConfirmationComponent } from 'src/app/storefront/checkout-confirmation/checkout-confirmation.component';
import { OrdersComponent } from 'src/app/storefront/orders/orders.component';

import { ProductCategoryComponent } from 'src/app/storefront/product-category/product-category.component';
import { ProductCategoriesComponent } from 'src/app/storefront/product-categories/product-categories.component';
import { SearchResultsComponent } from 'src/app/storefront/search-results/search-results.component';
import { LoginComponent } from 'src/app/storefront/login/login.component';

const routes: Routes = [
  
  { path: '', component: ProductCategoriesComponent },
  { path: 'account',
    children: [
      {
        path: '',
        children: [
          { path: 'orders', component: OrdersComponent },
        ]
      }
    ]
  },
  { path: 'checkout',
    children: [
      {
        path: '',
        children: [
          { path: 'shipping', component: CheckoutShippingComponent },
          { path: 'billing', component: CheckoutBillingComponent },
          { path: 'payment', component: CheckoutPaymentComponent },
          { path: 'review', component: CheckoutReviewComponent },
          { path: 'confirmation', component: CheckoutConfirmationComponent },
        ]
      }
    ]
  },
  { path: 'category/:slug', component: ProductCategoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: LoginComponent },
  { path: 'page/:url', component: PageComponent },
  { path: 'product/:url', component: ProductComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'blog', component: PostsComponent },
  { path: 'blog/:url', component: PostComponent },
  { path: 'cart', component: CartComponent },
  { path: 'search', component: SearchResultsComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
