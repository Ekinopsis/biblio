import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/interfaces/Usuarios';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
listarUsuarios: Usuarios[]=[
  {
    identificacion: 217036062,
    nombres:'Juan Felipe',
    apellidos:'Perdomo',
    celular:3223050330,
    correo:'juanperdomo148@gmail.com',
    password:'12345'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
