import { CircoService } from '../circo.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { accentFold } from '../../shared/accent-folding';

@Component({
  selector: 'app-circo-search',
  templateUrl: './circo-search.component.html',
  styleUrls: ['./circo-search.component.scss']
})
export class CircoSearchComponent implements OnInit {

  private circos: any;
  filteredCircos: any;
  model = {
    search: ''
  };

  @Output() select = new EventEmitter<string>();

  constructor(private circoService: CircoService) {}

  ngOnInit() {
    this.circoService.getAll().then(circos => this.circos = circos);
  }

  onSearchChange($event) {
    this.filteredCircos = this.circos.filter(circos => {
      return accentFold(circos.gsx$nom.$t).toUpperCase().includes(accentFold(this.model.search).toUpperCase());
    });
  }

  onClick($event, circoId) {
    this.select.emit(circoId);
  }
}
