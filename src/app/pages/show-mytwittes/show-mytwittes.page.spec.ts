import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMytwittesPage } from './show-mytwittes.page';

describe('ShowMytwittesPage', () => {
  let component: ShowMytwittesPage;
  let fixture: ComponentFixture<ShowMytwittesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMytwittesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMytwittesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
