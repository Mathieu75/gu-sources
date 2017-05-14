import { CandidatService } from './candidat.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CircoService } from './circo.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ShowComponent } from './show/show.component';
import { CandidatCardComponent } from './candidat-card/candidat-card.component';
import { CandidatSubscribeFormComponent } from './candidat-subscribe-form/candidat-subscribe-form.component';
import { CandidatSubscribeComponent } from './candidat-subscribe/candidat-subscribe.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    SearchComponent,
    ShowComponent,
    CandidatCardComponent,
    CandidatSubscribeFormComponent,
    CandidatSubscribeComponent
  ],
  exports: [
    SearchComponent,
    CandidatSubscribeFormComponent
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
