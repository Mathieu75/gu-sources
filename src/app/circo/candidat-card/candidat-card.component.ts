import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-candidat-card',
  templateUrl: './candidat-card.component.html',
  styleUrls: ['./candidat-card.component.scss']
})
export class CandidatCardComponent implements OnInit {

  private _candidat: any = {};

  private readonly partiIcon = {
    'pcf': '/assets/partis/pcf.png',
    'eelv' : '/assets/partis/eelv.jpg',
    'fbcf' : '/assets/partis/fbcf.png',
    'fi': '/assets/partis/fi.jpg'
  };

  @Input() empty = false;

  @Input()
  set candidat(candidat: any) {
    this._candidat.nom = candidat.gsx$nom.$t;
    this._candidat.prenom = candidat.gsx$prenom.$t;
    this._candidat.picture = candidat.gsx$picture.$t;
    this._candidat.groupeImage = this.partiIcon[candidat.gsx$groupe.$t.toLowerCase()];

    this._candidat.liens = [];
    for (let i = 2; i < 12; i++) {
      if (candidat['gsx$lienurl' + (i === 1 ? '' : `_${i}`)].$t) {
          this._candidat.liens.push({
            url: candidat['gsx$lienurl' + (i === 1 ? '' : `_${i}`)].$t,
            texte: candidat['gsx$lientext' + (i === 1 ? '' : `_${i}`)].$t
          });
      }
    }
  };

  get candidat() { return this._candidat; };

  constructor() { }

  ngOnInit() {
  }

}
