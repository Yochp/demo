import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wiki-nav-bar',
  templateUrl: './wiki-nav-bar.component.html',
  styleUrls: ['./wiki-nav-bar.component.css']
})
export class WikiNavBarComponent implements OnInit {



items: any[] = [
  {id: 1, title: 'title1', desc: 'dec1'},
  {id: 1, title: 'title2', desc: 'dec2'},
  {id: 1, title: 'title3', desc: 'dec3'}
];








  constructor() { }

  ngOnInit() {
  }

}
