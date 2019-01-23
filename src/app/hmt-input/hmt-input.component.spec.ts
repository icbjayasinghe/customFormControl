import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HmtInputComponent } from './hmt-input.component';

describe('HmtInputComponent', () => {
  let component: HmtInputComponent;
  let fixture: ComponentFixture<HmtInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HmtInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HmtInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
