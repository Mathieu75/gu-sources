import { Link } from './../candidat-link-edit/candidat-link-edit.component';
import { Router } from '@angular/router';
import { CandidatService } from './../candidat.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-candidat-add',
  templateUrl: './candidat-add.component.html',
  styleUrls: ['./candidat-add.component.scss']
})
export class CandidatAddComponent implements OnInit {

  @Input() candidat: any = {};
  readonlyPictureUrl = false;

  constructor(private candidatServ: CandidatService, private router: Router) { }

  ngOnInit() {
  }

  onCircoSelect(circoId) {
    this.candidat.circo = circoId;
  }

  onPictureUploadSuccess(picture) {
    this.candidat.picture = picture.data.url;
    this.readonlyPictureUrl = true;
  }

  onSubmit() {
    this.candidatServ.addCandidat(this.candidat).then(() => {
      this.router.navigateByUrl('/milit/ok');
    });
  }

  onLinksSaved(links: Link[]) {
    this.candidat.links = links;
  }

}
