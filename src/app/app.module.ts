import { RouterModule } from '@angular/router';
import { CircoModule } from './circo/circo.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CloudinaryModule } from '@cloudinary/angular';
import { Cloudinary } from 'cloudinary-core/cloudinary-core-shrinkwrap';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';

const cloudinaryLib = {
  Cloudinary
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FileUploadModule,
    CloudinaryModule.forRoot(cloudinaryLib, {
      cloud_name: 'gaucheunie'
    }),
    RouterModule,
    FormsModule,
    CoreModule,
    AppRoutingModule,
    CircoModule.forRoot(),
    CloudinaryModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
