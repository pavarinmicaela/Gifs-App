import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearcherComponent } from './gifs-page/searcher/searcher.component';
import { GifsListComponent } from './gifs-page/gifs-list/gifs-list.component';



@NgModule({
  declarations: [GifsPageComponent, SearcherComponent, GifsListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }
