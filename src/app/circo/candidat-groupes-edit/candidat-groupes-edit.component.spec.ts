import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatLinkEditComponent } from './candidat-link-edit.component';

describe('CandidatLinkEditComponent', () => {
  let component: CandidatLinkEditComponent;
  let fixture: ComponentFixture<CandidatLinkEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatLinkEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatLinkEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
