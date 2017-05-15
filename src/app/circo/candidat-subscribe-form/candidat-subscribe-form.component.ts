import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidat-subscribe-form',
  templateUrl: './candidat-subscribe-form.component.html',
  styleUrls: ['./candidat-subscribe-form.component.scss']
})
export class CandidatSubscribeFormComponent implements OnInit {

  candidat: any = {};

  constructor() { }

  ngOnInit() {
  }

  onCircoSelect(circoId) {
    this.candidat.circo = circoId;
    if (this.candidat.candidat && this.candidat.candidat.gsx$circo.$t !== this.candidat.circo) {
      this.candidat.candidat = null;
    }
  }

  onCandidatSelect(candidat) {
    this.candidat.candidat = candidat;
    this.candidat.circo = candidat.gsx$circo.$t;
  }

}
