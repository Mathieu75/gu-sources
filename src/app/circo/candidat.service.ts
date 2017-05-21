import { SheetCandidatConverter } from 'app/circo/candidat.model';
import { Candidat } from './candidat.model';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { SheetAbstractService } from '../shared/sheet-service';

const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
const options = new RequestOptions({ headers });

@Injectable()
export class CandidatService extends SheetAbstractService<Candidat> {

  private currentlyEdited: any;

  private readonly scriptUrls = {
    engagement: 'https://script.google.com/macros/s/AKfycbyGDzuv_5p8TUq8Hc0oGZpOyJGYXrWORReAp4DbLqvEq5EmO4s/exec',
    candidat: 'https://script.google.com/macros/s/AKfycbxowtRcyrV4HF9flGrnGY1r4ZzTi2Xs9IvilFjH29ETR1fQYHQ/exec'
  };

  constructor(http: Http) {
    super(http, '13WcWoYZCpLQE9U2q9YCOJRxrdZpNpyK_Z1igQFbpUsU', SheetCandidatConverter, true);
  }

  // TODO: use Google Script instead
  getByCirco(circoId: string) {
    return super.getAll()
      .then(candidats => {
        return candidats.filter(candidat => candidat.circo === circoId);
      });
  }

  addEngagement(engagement: any) {
    const toSend = super.toUrlEncoded(engagement);
    return this.http.post(this.scriptUrls.engagement, toSend, options).toPromise()
      .then((res) => {
        const rslt = res.json();
        if (rslt.result !== 'success') {
          throw new Error(rslt.error || 'an error occured');
        };
        return rslt;
      });
  }

  addCandidat(candidat: Candidat) {
    delete candidat.id;
    this.setForEdition(null);
    const sheet = SheetCandidatConverter.toSheet(candidat);
    const toSend = Object.keys(sheet)
      .reduce((acc, key) => `${acc}&${key}=${sheet[key]}`, '').substr(1);

    return this.http.post(this.scriptUrls.candidat, toSend, options).toPromise()
      .then((res) => {
        const rslt = res.json();
        if (rslt.result !== 'success') {
          throw new Error(rslt.error || 'an error occured');
        };
        return rslt;
      });
  }

  setForEdition(candidat: Candidat) {
    this.currentlyEdited = candidat;
  }

  getForEdition() {
    return this.currentlyEdited;
  }

}
