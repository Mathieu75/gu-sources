import { Candidat } from 'app/circo/candidat.model';
import { CircoService } from './../circo.service';
import { CandidatService } from '../candidat.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidats-show',
  templateUrl: './candidats-show.component.html',
  styleUrls: ['./candidats-show.component.scss']
})
export class CandidatsShowComponent implements OnInit {

  private circoId: string;
  candidats: Promise<Candidat[]>;

  constructor(private candidatService: CandidatService, private circoService: CircoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.circoId = params['id'];
      this.candidats = this.candidatService.getByCirco(this.circoId);
    });
  }

}
