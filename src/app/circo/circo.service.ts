import { SheetAbstractService } from './../shared/sheet-service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// TODO: define Circo class
@Injectable()
export class CircoService extends SheetAbstractService<any> {

  constructor(http: Http) {
    super(http, '1gYZNVhUxGogX-8WnVLvWoWiaUg0r0seAOK0AbCoEKPE');
  }

}
