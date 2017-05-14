import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatSubscribeFormComponent } from './candidat-subscribe-form.component';

describe('CandidatSubscribeFormComponent', () => {
  let component: CandidatSubscribeFormComponent;
  let fixture: ComponentFixture<CandidatSubscribeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatSubscribeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatSubscribeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
