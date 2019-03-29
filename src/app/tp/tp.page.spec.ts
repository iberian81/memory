import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpPage } from './tp.page';

describe('TpPage', () => {
  let component: TpPage;
  let fixture: ComponentFixture<TpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
