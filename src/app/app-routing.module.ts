import { CandidatSubscribeComponent } from './circo/candidat-subscribe/candidat-subscribe.component';
import { MilitHomeComponent } from './core/milit-home/milit-home.component';
import { ShowComponent } from './circo/show/show.component';
import { HomeComponent } from './core/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'circo/:id',
    component: ShowComponent
  },
  {
    path: 'articles',
    loadChildren: 'app/articles/articles.module#ArticlesModule'
  },
  {
    path: 'milit/home',
    component: MilitHomeComponent
  },
  {
    path: 'milit/candidat',
    component: CandidatSubscribeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
