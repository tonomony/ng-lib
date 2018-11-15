import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCoreLibComponent } from './ng-core-lib.component';

describe('NgCoreLibComponent', () => {
  let component: NgCoreLibComponent;
  let fixture: ComponentFixture<NgCoreLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCoreLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCoreLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
