import { Candidat } from 'app/circo/candidat.model';
import { FormStatesService } from './../../core/form-states.service';
import { Router, NavigationStart } from '@angular/router';
import { CandidatService } from './../candidat.service';
import { Http } from '@angular/http';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-candidat-subscribe-form',
  templateUrl: './candidat-subscribe-form.component.html',
  styleUrls: ['./candidat-subscribe-form.component.scss'],
    encapsulation: ViewEncapsulation.None

})
export class CandidatSubscribeFormComponent implements OnInit {

  // TODO : define Engagement class
  engagement: any = {};
  candidat: Candidat = {};
  circoId: string;

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

  onCircoSelect(circoId: string) {
    this.circoId = circoId;
    if (this.candidat.circo !== this.circoId) {
      this.engagement.candidat = null;
    }
  }

  onCandidatSelect(candidat) {
    this.candidat = candidat;
    this.engagement.candidatId = candidat.id;
    this.circoId = candidat.circo;
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
