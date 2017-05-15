import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-candidats-list',
  templateUrl: './candidats-list.component.html',
  styleUrls: ['./candidats-list.component.scss']
})
export class CandidatsListComponent implements OnInit {

  private _candidats: any[] = [];

  @Input()
  set candidats(candidats: any[]) {
      this._candidats = candidats || [];
  }

  get candidats(): any[] {
    return this._candidats;
  }

  @Output() select = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(candidat) {
    this.select.emit(candidat);
  }

}
