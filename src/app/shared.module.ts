import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { SortPipe } from './pipes/sort.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { GetUserPipe } from './pipes/get-user.pipe';
import { ObjectCountPipe } from './pipes/object-count.pipe';
import { GetKeyPipe } from './pipes/get-key.pipe';
import { SearchPipe } from './pipes/search.pipe';

const pipes = [
  GetUserPipe,
  GetKeyPipe,
  ObjectCountPipe,
  SafeHtmlPipe,
  SortPipe,
  TruncatePipe,
  SearchPipe
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ...pipes,
  ],
  exports: [
    ...pipes,
    RouterModule,
  ]
})
export class SharedModule { }