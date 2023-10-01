import { Component, OnInit, Input, EventEmitter } from '@angular/core';


export interface User {
  id:number,
  name:string,
  surname:string,
  age:number,
  fav:boolean
}



@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})


export class UserInfoComponent implements OnInit, User {
  @Input() id:number = 0;
  @Input() name: string = '';
  @Input() surname: string = '';
  @Input() age: number = 0;
  @Input() fav:boolean = false;

  constructor() {}

  ngOnInit() {}
}


/*onFavClick(event:any){
  this.onFavClicked.emit({
    fav:!(this.user?.fav??false) //devolvemos el estado contrario al que tenemos
  });
  event.stopPropagation();
}*/

export interface UserInfoFavClicked{
  fav:boolean | undefined;
 }
 

//@Output() onFavClicked:EventEmitter<UserInfoFavClicked> = new EventEmitter<UserInfoFavClicked>();


