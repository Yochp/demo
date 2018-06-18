import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiNavBarComponent } from './wiki-nav-bar.component';

describe('WikiNavBarComponent', () => {
  let component: WikiNavBarComponent;
  let fixture: ComponentFixture<WikiNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
