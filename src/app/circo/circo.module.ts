import { SharedModule } from './../shared/shared.module';
import { CandidatService } from './candidat.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CircoService } from './circo.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircoSearchComponent } from './circo-search/circo-search.component';
import { CandidatsShowComponent } from './candidats-show/candidats-show.component';
import { CandidatCardComponent } from './candidat-card/candidat-card.component';
import { CandidatSubscribeFormComponent } from './candidat-subscribe-form/candidat-subscribe-form.component';
import { CandidatSubscribeComponent } from './candidat-subscribe/candidat-subscribe.component';
import { CandidatSearchComponent } from './candidat-search/candidat-search.component';
import { CandidatsListComponent } from './candidats-list/candidats-list.component';
import { OkViewComponent } from './ok-view/ok-view.component';
import { CandidatAddComponent } from './candidat-add/candidat-add.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    CircoSearchComponent,
    CandidatsShowComponent,
    CandidatCardComponent,
    CandidatSubscribeFormComponent,
    CandidatSubscribeComponent,
    CandidatSearchComponent,
    CandidatsListComponent,
    OkViewComponent,
    CandidatAddComponent
  ],
  exports: [
    CircoSearchComponent,
    CandidatSubscribeComponent,
    OkViewComponent,
    CandidatAddComponent
  ]
})
export class CircoModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CircoModule,
      providers: [
        CircoService,
        CandidatService,
      ]
    };
  }
}
