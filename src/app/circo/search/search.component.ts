import { CircoService } from '../circo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private circos: any;
  filteredCircos: any;
  model = {
    search: ''
  };

  constructor(private circoService: CircoService) {}

  ngOnInit() {
    this.circoService.getAll().then(circos => this.circos = circos);
  }

  onSearchChange($event) {
    this.filteredCircos = this.circos.filter(circos => {
      return circos.gsx$nom.$t.toUpperCase().includes(this.model.search.toUpperCase());
    });
  }
}
