import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users = [
    { nombre: 'Juan', apellidos: 'Pérez Ramírez', edad: 18 },
    { nombre: 'María', apellidos: 'León González', edad: 16 },
    { nombre: 'Luis', apellidos: 'Sánchez Rodríguez', edad: 23 },
    { nombre: 'Ana', apellidos: 'Fernandez Martínez', edad: 21 },
  ];
}
