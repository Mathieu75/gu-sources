import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';
import {FileUploadModule} from 'ng2-file-upload';


@NgModule({
  imports: [
    CommonModule,
    FileUploadModule
  ],
  declarations: [
    PhotoUploadComponent
  ],
  exports: [
    PhotoUploadComponent
  ]
})
export class SharedModule { }
