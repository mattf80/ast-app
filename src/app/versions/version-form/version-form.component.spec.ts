/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VersionFormComponent } from './version-form.component';

describe('VersionFormComponent', () => {
  let component: VersionFormComponent;
  let fixture: ComponentFixture<VersionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
