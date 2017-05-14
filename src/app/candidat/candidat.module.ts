import { CandidatService } from './candidat.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CandidatCardComponent } from './candidat-card/candidat-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CandidatCardComponent
  ],
  exports: [
    CandidatCardComponent
  ]
})
export class CandidatModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CandidatModule,
      providers: [
        CandidatService
      ]
    }
  }
}
