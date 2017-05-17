import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SubscribeComponent
  ],
  exports: [
    SubscribeComponent
  ]
})
export class MilitModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MilitModule,
      providers: [
      ]
    };
  }
 }
