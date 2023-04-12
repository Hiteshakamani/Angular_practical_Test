import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { SearchItemComponent } from './search-item/search-item.component';


@NgModule({
  declarations: [
    SearchItemComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ],
  exports:[
    SearchItemComponent
  ]
})
export class DetailsModule { }
