import { Component, OnInit } from '@angular/core';
import {EmailService} from '../email.service';

@Component({
  selector: 'app-inputcomp',
  templateUrl: './inputcomp.component.html',
  styleUrls: ['./inputcomp.component.css']
})
export class InputcompComponent implements OnInit {

  test: any;
test1;
  constructor(servl: EmailService) {
    this.test1 = servl.getCourse();
  }

  ngOnInit() {
  }

}
