import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { SheetAbstractService } from '../shared/sheet-service';

@Injectable()
export class CandidatService extends SheetAbstractService {

  constructor(http: Http) {
    super(http, '13WcWoYZCpLQE9U2q9YCOJRxrdZpNpyK_Z1igQFbpUsU');
  }

  // TODO: use Google Script instead
  getByCirco(circoId: string) {
    return super.getAll()
      .then(candidats => candidats.filter(candidat => candidat.gsx$circo.$t === circoId));
  }

}
