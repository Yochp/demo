import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {


  constructor(public auth: AuthService) {
  }

  // cal func logOut from authService
  logOut() {
  this.auth.logOut();
}

}



