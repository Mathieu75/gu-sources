import { CandidatService } from './../../candidat/candidat.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  private circoId: string;
  candidats = {
    retrieved: false,
    data: []
  };

  constructor(private candidatService: CandidatService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.circoId = params['id'];
      this.candidatService.getByCirco(this.circoId).then(data => {
        this.candidats = {
          retrieved: true,
          data
        };
      });
    });
  }

}
