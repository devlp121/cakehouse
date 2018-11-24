import { Component, OnInit, NgModule } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { GlobalService } from '../../services/global.service';
import { Router } from '@angular/router';


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
  posts: Observable<any[]>;
  searchTerm: string;



  constructor(
    public db: AngularFireDatabase,
    private title: Title,
    private meta: Meta,
    public globalService: GlobalService,
    public router: Router,
  ) {
    this.categories = db.list('/categories', ref => ref.orderByChild('weight').limitToLast(999)).valueChanges();

    this.posts = db.list('/posts', ref => ref.orderByChild('published').equalTo(true).limitToLast(20)).valueChanges();

    this.globalService.searchTerm.subscribe((term) => {
      this.searchTerm = term;
    });
  }

  ngOnInit() {
    this.title.setTitle('Rowze Cake House');
    this.meta.updateTag({ content: 'Enjoy the rich taste' }, "name='description'");
  }
getPostImage(post:any) {
    if (post.thumbnail) {
      return post.thumbnail;
    }
  }
}
