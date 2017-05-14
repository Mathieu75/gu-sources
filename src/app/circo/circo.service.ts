import { SheetAbstractService } from './../shared/sheet-service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CircoService extends SheetAbstractService {

  constructor(http: Http) {
    super(http, '1gYZNVhUxGogX-8WnVLvWoWiaUg0r0seAOK0AbCoEKPE');
  }

}
