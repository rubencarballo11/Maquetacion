import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePages2Component } from './home-pages2.component';

describe('HomePages2Component', () => {
  let component: HomePages2Component;
  let fixture: ComponentFixture<HomePages2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePages2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePages2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
