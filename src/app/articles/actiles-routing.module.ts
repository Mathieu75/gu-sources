import { CharteComponent } from './charte/charte.component';
import { PrincipeComponent } from './principe/principe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'principe',
    component: PrincipeComponent
  },
  {
    path: 'charte',
    component: CharteComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class ArticlesRoutingModule { }
