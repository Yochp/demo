import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my robbot wotk shop';



}

export class RobotFactoy {

  id: number;
  branchName: string;
  managerName: string;
  employees: number;
  city: string;
  coordinates: {lon: number, lat: number};
}


