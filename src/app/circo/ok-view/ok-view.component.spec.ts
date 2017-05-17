import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkViewComponent } from './ok-view.component';

describe('OkViewComponent', () => {
  let component: OkViewComponent;
  let fixture: ComponentFixture<OkViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
