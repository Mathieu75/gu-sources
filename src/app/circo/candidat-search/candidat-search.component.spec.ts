import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatSearchComponent } from './candidat-search.component';

describe('CandidatSearchComponent', () => {
  let component: CandidatSearchComponent;
  let fixture: ComponentFixture<CandidatSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
