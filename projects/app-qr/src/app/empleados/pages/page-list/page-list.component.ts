import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';

@Component({
  selector: 'qr-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  public data: any[] = [
    {
      cedula: '1900',
      name: 'Kevin',
      lastName: 'Suarez',
      position: 'Inspector',
      email: 'kevin@correo.com'
    },
    {
      cedula: '1901',
      name: 'Kevin',
      lastName: 'Alvear',
      position: 'Mantenimiento',
      email: 'kevinA@correo.com'
    }
    , {
      cedula: '1902',
      name: 'Fernando',
      lastName: 'Zerna',
      position: 'Encargado',
      email: 'fernando@correo.com'
    }
    , {
      cedula: '1903',
      name: 'Paulina',
      lastName: 'Sanchez',
      position: 'Limpieza',
      email: 'paulina@correo.com'
    }

  ];
  /* 
    public listFields: string[] = ['cedula', 'name', 'lastName', 'position', 'email']; */

  public metaDataColumns: MetaDataColumn[] = [{
    field: 'cedula',
    title: 'Cédula'
  },
  {
    field: 'name',
    title: 'Nombre'
  },
  {
    field: 'lastName',
    title: 'Apellido'
  },
  {
    field: 'position',
    title: 'Posición'
  },
  {
    field: 'email',
    title: 'Correo'
  }]


  constructor() { }

  ngOnInit(): void {
  }

  /* cedula-nombre-apellido-cargo-correo */
}
