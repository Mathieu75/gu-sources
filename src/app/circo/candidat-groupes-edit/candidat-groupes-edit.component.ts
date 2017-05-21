import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-candidat-groupes-edit',
  templateUrl: './candidat-groupes-edit.component.html',
  styleUrls: ['./candidat-groupes-edit.component.scss']
})
export class CandidatGroupesEditComponent implements OnInit {

  @Input() existingGroupes: string[] = [];

  @Output() save = new EventEmitter<string[]>();

  groupes: string[];

  constructor() { }

  ngOnInit() {
    this.groupes = [].concat(this.existingGroupes, '');
  }

  addGroupe() {
    this.groupes.push('');
  }

  saveGroupes() {
    this.save.emit(this.groupes.filter(elt => !!elt));
  }

  removeGroupe(index: number) {
    this.groupes.splice(index, 1);
  }

  trackGroupes(index: number, groupe: string) {
    return index;
  }

}
