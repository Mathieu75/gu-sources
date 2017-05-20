import { Candidat } from 'app/circo/candidat.model';
import { ActivatedRoute } from '@angular/router';
import { CandidatService } from './../candidat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidat-edit',
  templateUrl: './candidat-edit.component.html',
  styleUrls: ['./candidat-edit.component.scss']
})
export class CandidatEditComponent implements OnInit {

  candidat: Candidat;

  constructor(private candidatServ: CandidatService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.candidat = this.candidatServ.getForEdition();
    this.route.params.subscribe(params => {
      this.candidat.edited = params['id'];
    });
  }

}
