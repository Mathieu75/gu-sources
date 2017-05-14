import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CircoModule } from './../circo/circo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MilitHomeComponent } from './milit-home/milit-home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CircoModule,
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    MilitHomeComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
