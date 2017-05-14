import { ArticlesRoutingModule } from './actiles-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipeComponent } from './principe/principe.component';
import { CharteComponent } from './charte/charte.component';

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ],
  declarations: [
    PrincipeComponent,
    CharteComponent
  ]
})
export class ArticlesModule { }
