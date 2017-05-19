import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatSearchPageComponent } from './candidat-search-page.component';

describe('CandidatSearchPageComponent', () => {
  let component: CandidatSearchPageComponent;
  let fixture: ComponentFixture<CandidatSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
