import { CircoService } from '../../circo/circo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {}

  onSelect(circoId) {
    this.router.navigate(['/circo', circoId]);
  }

}
