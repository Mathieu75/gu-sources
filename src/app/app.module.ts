import { MilitModule } from './milit/milit.module';
import { RouterModule } from '@angular/router';
import { CircoModule } from './circo/circo.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FileUploadModule,
    RouterModule,
    FormsModule,
    CoreModule,
    AppRoutingModule,
    CircoModule.forRoot(),
    MilitModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
