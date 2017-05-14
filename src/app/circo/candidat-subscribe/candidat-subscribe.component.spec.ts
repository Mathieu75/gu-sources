import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatSubscribeComponent } from './candidat-subscribe.component';

describe('CandidatSubscribeComponent', () => {
  let component: CandidatSubscribeComponent;
  let fixture: ComponentFixture<CandidatSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatSubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
