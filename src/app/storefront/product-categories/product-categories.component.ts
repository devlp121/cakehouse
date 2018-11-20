import { Component, OnInit, NgModule } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { ProductCategoryComponent } from '../product-category/product-category.component';
@NgModule({
  imports:[
    ProductCategoryComponent
  ]
})


@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {
  categories: Observable<any>;

  constructor(
    public db: AngularFireDatabase,
    private title: Title,
    private meta: Meta
  ) {
    this.categories = db.list('/categories', ref => ref.orderByChild('weight').limitToLast(999)).valueChanges();
  }

  ngOnInit() {
    this.title.setTitle('Rowze Cake House');
    this.meta.updateTag({ content: 'Enjoy the rich taste' }, "name='description'");
  }

}
