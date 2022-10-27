import { Component, OnInit } from '@angular/core';
import { Libros } from 'src/app/interfaces/Libros';

@Component({
  selector: 'app-mostrar-libros',
  templateUrl: './mostrar-libros.component.html',
  styleUrls: ['./mostrar-libros.component.css']
})
export class MostrarLibrosComponent implements OnInit {
  inicio: Libros[]=[
    
    {
      isbn:1001,
      titulo:'Luces de bohemia',
      autor:'Valle-Inclán, Ramón',
      editorial:'Espasa-Calpe',
      fechaPublicacion:'Ene 14 2001'
    },
    {
      isbn:1002,
      titulo:'Crimen Y Castigo',
      autor:'Fiodor Dostoyevski',
      editorial:' Libros del Mundo',
      fechaPublicacion:'Mar 03 1999'
    },{
      isbn:1003,
      titulo:'Cien (100) años de soledad',
      autor:'García Márquez',
      editorial:'Círculo de lectores',
      fechaPublicacion:'Jun 03 1985'
    },{
      isbn:1004,
      titulo:'En las montañas de la locura',
      autor:'H.P. Lovecraft',
      editorial:'Alianza Editorial',
      fechaPublicacion:'Sep 25 1936'
    },{
      isbn:1005,
      titulo:'Neuromante',
      autor:'William Gibson',
      editorial:'Ace Books',
      fechaPublicacion:'Dic 11 1984'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

