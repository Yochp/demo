import { Component, OnInit, Input } from '@angular/core';
import {RobotFactoy} from '../app.component';
import { RobotFacorys } from '../mock-RobotFactory';

@Input() RobotFactoyDTLS: RobotFactoy;

@Component({
  selector: 'app-factory-detail',
  templateUrl: './factory-detail.component.html',
  styleUrls: ['./factory-detail.component.css']
})
export class FactoryDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
