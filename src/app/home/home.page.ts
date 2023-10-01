import { Component } from '@angular/core';
import { User } from 'src/app/home/user-info/user-info.component';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  _users = [
    { name: 'Juan', surname: 'Pérez Ramírez', age: 18 },
    { name: 'María', surname: 'León González', age: 16 },
    { name: 'Luis', surname: 'Sánchez Rodríguez', age: 23 },
    { name: 'Ana', surname: 'Fernandez Martínez', age: 21 },
  ];

  next(users: User[]): void {
    this._users = users;
  }

  ngOnInit(): void {
  
    var users:User[] = [
      {id: 1, name:"Juan A.", surname:"garcía gómez", age:46, fav:true},
      {id: 2, name:"Alejandro", surname:"garcía gómez", age:45, fav:true},
      {id: 3, name:"juan", surname:"garcía Valencia", age:4, fav:false},
      {id: 4, name:"María del Mar", surname:"Valencia Valencia", age:46, fav:true},
      {id: 5, name:"Lydia", surname:"garcía Robles", age:11, fav:false}
    ];
    this.next(users);
  }
}
