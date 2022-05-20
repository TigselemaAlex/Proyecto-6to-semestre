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
      id: 1,
      chanel: 'Telefono',
      description: 'Comunicación via telefónica'
    },
    {
      id: 2,
      chanel: 'Celular',
      description: 'Comunicación via celular'
    }, {
      id: 3,
      chanel: 'Red social',
      description: 'Comunicación via red social'
    }, {
      id: 4,
      chanel: 'Correo',
      description: 'Comunicación via Correo electrónico'
    }, {
      id: 5,
      chanel: 'Radio',
      description: 'Comunicación via Radio'
    }
  ]
  /* 
    public listFields: string[] = ['id', 'chanel', 'description']; */

  public metaDataColumns: MetaDataColumn[] = [{
    field: 'id',
    title: 'ID'
  },
  {
    field: 'chanel',
    title: 'Canal'
  },
  {
    field: 'description',
    title: 'Descripción'
  }]

  constructor() { }

  ngOnInit(): void {
  }

  /* id-canal-descripcion  comunicacion*/
}
