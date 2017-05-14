import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitHomeComponent } from './milit-home.component';

describe('MilitHomeComponent', () => {
  let component: MilitHomeComponent;
  let fixture: ComponentFixture<MilitHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
