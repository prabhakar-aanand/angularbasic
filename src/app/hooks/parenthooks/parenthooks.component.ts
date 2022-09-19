import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parenthooks',
  templateUrl: './parenthooks.component.html',
  styles: [
  ]
})
export class ParenthooksComponent implements OnInit,DoCheck,OnChanges,OnDestroy {
  name:string; 
  users:any[] | undefined;
  subscription:Subscription | undefined;

  constructor(private client:HttpClient) {
  console.log("parent:constructor");
  this.name='Prabhakar';
   }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngOnChanges(): void {
    console.log('OnChanges');
  }
  ngOnInit(): void {
    console.log("ngOnInit");
    const url ='https://dummyjson.com/users';
    this.subscription= this.client.get<any[]>(url).subscribe( res => {
      if (res!=null){
        this.users =res;
        console.log(this.users);
      }      
    });
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
}
