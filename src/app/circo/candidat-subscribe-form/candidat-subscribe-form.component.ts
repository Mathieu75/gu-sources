import { CandidatService } from './../candidat.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidat-subscribe-form',
  templateUrl: './candidat-subscribe-form.component.html',
  styleUrls: ['./candidat-subscribe-form.component.scss']
})
export class CandidatSubscribeFormComponent implements OnInit {

  engagement: any = {};
  candidat: any = {};
  circoId: number;

  constructor(private candidatServ: CandidatService) { }

  ngOnInit() {
  }

  onCircoSelect(circoId: number) {
    this.circoId = circoId;
    if (this.candidat.gsx$circo && this.candidat.gsx$circo.$t !== this.circoId) {
      this.engagement.candidat = null;
    }
  }

  onCandidatSelect(candidat) {
    this.candidat = candidat;
    this.engagement.candidatId = candidat.gsx$id.$t;
    this.circoId = candidat.gsx$circo.$t;
  }

  onSubmit() {
    this.candidatServ.addEngagement(this.engagement);
  }

  onEngagementUploadSuccess(event: {file, data, status}) {
    this.engagement.img = event.data.url;
  }

}
