import { CandidatEditComponent } from './circo/candidat-edit/candidat-edit.component';
import { CandidatSearchPageComponent } from './circo/candidat-search-page/candidat-search-page.component';
import { CandidatAddComponent } from './circo/candidat-add/candidat-add.component';
import { SubscribeComponent } from './milit/subscribe/subscribe.component';
import { OkViewComponent } from './circo/ok-view/ok-view.component';
import { CandidatSubscribeComponent } from './circo/candidat-subscribe/candidat-subscribe.component';
import { MilitHomeComponent } from './core/milit-home/milit-home.component';
import { CandidatsShowComponent } from './circo/candidats-show/candidats-show.component';
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
    component: CandidatsShowComponent
  },
  {
    path: 'circo/candidat/add',
    component: CandidatAddComponent
  },
  {
    path: 'circo/candidat/edit/:id',
    component: CandidatEditComponent,
  },
  {
    path: 'candidat',
    component: CandidatSearchPageComponent,
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
    path: 'milit/sub',
    component: SubscribeComponent
  },
  {
    path: 'milit/candidat',
    component: CandidatSubscribeComponent
  },
  {
    path: 'milit/ok',
    component: OkViewComponent
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
