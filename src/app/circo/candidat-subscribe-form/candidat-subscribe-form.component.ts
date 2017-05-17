import { FormStatesService } from './../../core/form-states.service';
import { Router, NavigationStart } from '@angular/router';
import { CandidatService } from './../candidat.service';
import { Http } from '@angular/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-candidat-subscribe-form',
  templateUrl: './candidat-subscribe-form.component.html',
  styleUrls: ['./candidat-subscribe-form.component.scss']
})
export class CandidatSubscribeFormComponent implements OnInit {

  engagement: any = {};
  candidat: any = {};
  circoId: number;

  private readonly stateKey = 'candidat-engagement';
  private shouldSave = true;

  showComponentsErrors = false;

  constructor(private candidatServ: CandidatService, private router: Router, private state: FormStatesService) {
    const preState = this.state.get(this.stateKey);
    this.candidat = preState.candidat || {};
    this.circoId = preState.circoId || null;
    this.engagement = preState.engagement || {};

    router.events.subscribe((evt) => {
      if (evt instanceof NavigationStart && this.shouldSave) {
        this.state.set(this.stateKey, { candidat: this.candidat, circoId: this.circoId, engagement: this.engagement });
      }
    });
  }

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
    this.candidatServ.addEngagement(this.engagement).then(() => {
      this.state.delete(this.stateKey);
      this.shouldSave = false;
      this.router.navigateByUrl('/milit/ok');
    });
  }

  onEngagementUploadSuccess(event: { file, data, status }) {
    this.engagement.img = event.data.url;
  }

  onInputBlur() {
    this.showComponentsErrors = true;
  }

}
