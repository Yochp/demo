import { Component, OnInit } from '@angular/core';
import {RobotFactoy} from '../app.component';
import { RobotFacorys } from '../mock-RobotFactory';

@Component({
  selector: 'app-robot-factory',
  templateUrl: './robot-factory.component.html',
  styleUrls: ['./robot-factory.component.css']
})
export class RobotFactoryComponent implements OnInit {

  robotFactoy: RobotFactoy ={
    id : 1,
  branchName: 'some',
  managerName: 'eli',
  employees: 80,
  city: 'brooklyn',
  coordinates: {lon: 3434.544, lat: 544.544},
};
// copy of the array
factory = RobotFacorys;
selectedFactory: RobotFactoy;




onSelect(RobotFacOnSelect): void {
  this.selectedFactory = RobotFacOnSelect;
}









  constructor() { }

  ngOnInit() {

  }

}

