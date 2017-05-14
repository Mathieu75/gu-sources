import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CircoService } from './circo.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ShowComponent } from './show/show.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    SearchComponent,
    ShowComponent
  ],
  exports: [
    SearchComponent,
  ]
})
export class CircoModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CircoModule,
      providers: [
        CircoService
      ]
    };
  }
}
