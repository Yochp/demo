import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotFactoryComponent } from './robot-factory.component';

describe('RobotFactoryComponent', () => {
  let component: RobotFactoryComponent;
  let fixture: ComponentFixture<RobotFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
