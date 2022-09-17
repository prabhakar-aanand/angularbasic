import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [
  ]
})
export class DetailsComponent implements OnInit {
  @Input() myCompany:string | undefined; 
  @Output() msg:EventEmitter<string>;
  constructor() {
    this.msg = new EventEmitter<string>();
   }

  ngOnInit(): void {
  }
  SendData(){
    this.msg.emit('Hi, From nested')
  }

}
