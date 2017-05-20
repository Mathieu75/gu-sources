import { Candidat } from 'app/circo/candidat.model';
import { CandidatService } from './../candidat.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { accentFold } from '../../shared/accent-folding';
import { SearchUtil } from 'app/shared/search.util';

@Component({
  selector: 'app-candidat-search',
  templateUrl: './candidat-search.component.html',
  styleUrls: ['./candidat-search.component.scss']
})
export class CandidatSearchComponent implements OnInit {

  private candidats: Candidat[];
  filteredCandidats: Candidat[];
  model = {
    search: ''
  };

  @Output() select = new EventEmitter<string>();

  @Input() circoId: any;

  constructor(private candidatService: CandidatService) {}

  ngOnInit() {
    if (!this.circoId) {
      this.candidatService.getAll().then(candidats => this.candidats = candidats);
    } else {
      this.candidatService.getByCirco(this.circoId).then(candidats => this.candidats = candidats);
    }
  }

  onSearchChange($event) {
    this.filteredCandidats = this.candidats.filter(candidat => {
      return SearchUtil.nonSensitiveTest(this.model.search, candidat, 'nom');
    });
  }

  onSelect(candidat) {
    this.select.emit(candidat);
  }

}
