import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DustinComponent } from './dustin.component';

describe('DustinComponent', () => {
  let component: DustinComponent;
  let fixture: ComponentFixture<DustinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DustinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DustinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
