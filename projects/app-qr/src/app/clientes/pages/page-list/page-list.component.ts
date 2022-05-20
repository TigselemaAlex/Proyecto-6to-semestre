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
      cedula: '1800',
      name: 'Alex',
      lastName: 'Tigselema',
      dateOfBirth: '21/11/1994',
      telephone: '0967205537',
      email: 'alex@correo.com'
    },
    {
      cedula: '1801',
      name: 'Jose',
      lastName: 'Pazmiño',
      dateOfBirth: '02/09/1999',
      telephone: '0925486300',
      email: 'jose@correo.com'
    },
    {
      cedula: '1802',
      name: 'Jhoel',
      lastName: 'Puetate',
      dateOfBirth: '17/04/2001',
      telephone: '0925869472',
      email: 'jhoel@correo.com'
    },
    {
      cedula: '1803',
      name: 'Jeniffer',
      lastName: 'Yaguana',
      dateOfBirth: '18/11/2001',
      telephone: '0998715634',
      email: 'jeniffer@correo.com'
    },
    {
      cedula: '1804',
      name: 'Richard',
      lastName: 'Carrion',
      dateOfBirth: '25/08/2001',
      telephone: '0905869472',
      email: 'richard@correo.com'
    }
  ]

  public listFields: string[] = ['cedula', 'name', 'lastName', 'dateOfBirth', 'telephone', 'email'];

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
    title: 'apellido'
  },
  {
    field: 'dateOfBirth',
    title: 'Fecha de Nacimiento'
  },
  {
    field: 'telephone',
    title: 'Telefono'
  },
  {
    field: 'email',
    title: 'Correo'
  }]

  constructor() { }

  ngOnInit(): void {
  }

  /* cedula-nombre-apellido-fecha nacimiento-celular-correo */
}
