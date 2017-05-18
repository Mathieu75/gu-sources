import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class Link {
  public id: number;
  public texte = '';
  public url = '';

  constructor(id) {
    this.id = id;
  }
}


@Component({
  selector: 'app-candidat-link-edit',
  templateUrl: './candidat-link-edit.component.html',
  styleUrls: ['./candidat-link-edit.component.scss']
})
export class CandidatLinkEditComponent implements OnInit {

  @Input() existingLinks: Link[] = [];

  @Output() save = new EventEmitter<Link[]>();

  links: Link[];

  constructor() { }

  ngOnInit() {
    this.links = [].concat(this.existingLinks, new Link(this.existingLinks.length + 1));
  }

  addLink() {
    this.links.push(new Link(this.links.length + 1));
  }

  saveLinks() {
    this.save.emit(this.links);
  }

  removeLink(index: number) {
    this.links.splice(index, 1);
  }

  trackLink(index, link) {
    return link.id;
  }

}
