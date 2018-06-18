import { Injectable } from '@angular/core';

@Injectable()
export class EmailService {

  getCourse() {
      return ['cours1', 'cours2' , 'cours3'];
  }


  constructor() { }

}
