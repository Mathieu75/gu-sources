import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidat-search-page',
  templateUrl: './candidat-search-page.component.html',
  styleUrls: ['./candidat-search-page.component.scss']
})
export class CandidatSearchPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelectCirco(circoId) {
    this.router.navigate(['/circo', circoId]);
  }

}
