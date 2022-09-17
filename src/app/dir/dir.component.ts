import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styles: [
    `
      .color-class {
        color:red;
      }
    `
  ]
})
export class DirComponent implements OnInit {
  num:number;
  colors:any[];
  color:string;
  constructor() {
    this.num=2;
    this.colors = ['red','green','yellow','blue'];
    this.color='';
   }

  ngOnInit(): void {
  }

}
