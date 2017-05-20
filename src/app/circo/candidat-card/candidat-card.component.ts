import { Router } from '@angular/router';
import { CandidatService } from './../candidat.service';
import { Component, OnInit, Input } from '@angular/core';
import { SheetCandidatConverter, Candidat } from 'app/circo/candidat.model';

class PresCandidat extends Candidat {
  groupeImage?: string;
}

@Component({
  selector: 'app-candidat-card',
  templateUrl: './candidat-card.component.html',
  styleUrls: ['./candidat-card.component.scss']
})
export class CandidatCardComponent implements OnInit {

  private _candidat: PresCandidat = {};

  private readonly partiIcon = {
    'pcf': '/assets/partis/pcf.png',
    'eelv' : '/assets/partis/eelv.jpg',
    'fbcf' : '/assets/partis/fbcf.png',
    'fi': '/assets/partis/fi.jpg'
  };

  @Input() empty = false;

  @Input()
  set candidat(candidat: Candidat) {
    this._candidat = candidat;
    this._candidat.groupeImage = this.partiIcon[this.candidat.groupe.toLowerCase()];
  };

  get candidat() { return this._candidat; };

  constructor(private candidatServ: CandidatService, private router: Router) { }

  ngOnInit() {
  }

  edit() {
    this.candidatServ.setForEdition(this.candidat);
    this.router.navigate(['/circo', 'candidat', 'edit', this.candidat.id]);
  }

}
