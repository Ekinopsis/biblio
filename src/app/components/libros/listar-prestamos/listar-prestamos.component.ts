import { Component, OnInit } from '@angular/core';
import { Prestamos } from 'src/app/interfaces/Prestamos';

@Component({
  selector: 'app-listar-prestamos',
  templateUrl: './listar-prestamos.component.html',
  styleUrls: ['./listar-prestamos.component.css']
})
export class ListarPrestamosComponent implements OnInit {
  listarPrestamos: Prestamos[]=[
    {
      isbnLibro:1005,
      idUsuario:217036062,
      fechaPrestamo:'Ene 12 2021',
      fechaDevolucion:'Feb 03 2021'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
