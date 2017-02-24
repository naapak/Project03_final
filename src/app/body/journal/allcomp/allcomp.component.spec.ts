/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllcompComponent } from './allcomp.component';

describe('AllcompComponent', () => {
  let component: AllcompComponent;
  let fixture: ComponentFixture<AllcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
