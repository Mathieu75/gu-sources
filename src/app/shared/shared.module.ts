import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';
import {FileUploadModule} from 'ng2-file-upload';
import { ImagePreviewDirective } from './image-preview.directive';


@NgModule({
  imports: [
    CommonModule,
    FileUploadModule
  ],
  declarations: [
    PhotoUploadComponent,
    ImagePreviewDirective
  ],
  exports: [
    PhotoUploadComponent,
    ImagePreviewDirective
  ]
})
export class SharedModule { }
