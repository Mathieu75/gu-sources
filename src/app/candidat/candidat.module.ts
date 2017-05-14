import { CandidatService } from './candidat.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
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
