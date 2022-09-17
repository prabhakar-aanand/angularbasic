import { Component, OnInit } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent extends ParentComponent {

  constructor() { 
    super();
    console.log('child:constructor');
  }

  override ngOnInit(): void {
    console.log('child:ngOnInit');
  }

}
