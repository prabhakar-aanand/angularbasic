import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: [
  ]
})
export class DatabindingComponent implements OnInit {
  company:string;
  name:string;
  site:string;
  constructor() {
    this.company = 'DNT';
    this.name = 'Prabhakar';
    this.site = "https://www.google.com"
   }

  ngOnInit(): void {
  }
  greet() {
    alert (`welcome ${this.name}`);
  }


}
