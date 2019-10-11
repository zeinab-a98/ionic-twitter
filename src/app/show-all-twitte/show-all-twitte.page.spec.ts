import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllTwittePage } from './show-all-twitte.page';

describe('ShowAllTwittePage', () => {
  let component: ShowAllTwittePage;
  let fixture: ComponentFixture<ShowAllTwittePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllTwittePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllTwittePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
