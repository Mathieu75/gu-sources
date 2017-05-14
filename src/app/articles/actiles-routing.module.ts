import { ValeursComponent } from './valeurs/valeurs.component';
import { PrincipeComponent } from './principe/principe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'principe',
    component: PrincipeComponent
  },
  {
    path: 'valeurs',
    component: ValeursComponent
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
