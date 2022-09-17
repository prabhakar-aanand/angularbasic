import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styles: [
  ]
})
export class PipeComponent implements OnInit {
  employees:any[];
  constructor() { 
    this.employees = [
      {name:'Prabhakar', address:'Delhi', salary:5000, date: new Date() } , 
      {name:'Anand', address:'Noida', salary:6000, date: new Date() } , 
      {name:'Ramu', address:'Pune', salary:7000, date: new Date() } 
    ];
  }

  ngOnInit(): void {
  }

}
