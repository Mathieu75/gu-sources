import { ArticlesRoutingModule } from './actiles-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipeComponent } from './principe/principe.component';
import { ValeursComponent } from './valeurs/valeurs.component';

@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ],
  declarations: [
    PrincipeComponent,
    ValeursComponent
  ]
})
export class ArticlesModule { }
