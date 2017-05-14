import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatCardComponent } from './candidat-card.component';

describe('CandidatCardComponent', () => {
  let component: CandidatCardComponent;
  let fixture: ComponentFixture<CandidatCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
