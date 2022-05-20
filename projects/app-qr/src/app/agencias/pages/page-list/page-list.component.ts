import { Component, OnInit } from '@angular/core';
import { environment } from 'projects/app-qr/src/environments/environment';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';

@Component({
  selector: 'qr-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  recordAgency: any[] = [
    {
      id: 1,
      agency: 'Ambato',
      address: 'Calle A'
    },
    {
      id: 2,
      agency: 'Quito',
      address: 'Calle B'
    },
    {
      id: 3,
      agency: 'Riobamba',
      address: 'Calle C'
    },
    {
      id: 4,
      agency: 'Loja',
      address: 'Calle D'
    },
    {
      id: 5,
      agency: 'Guayaquil',
      address: 'Calle E'
    },
    {
      id: 6,
      agency: 'Ambato',
      address: 'Calle A'
    },
    {
      id: 7,
      agency: 'Quito',
      address: 'Calle B'
    },
    {
      id: 8,
      agency: 'Riobamba',
      address: 'Calle C'
    },
    {
      id: 9,
      agency: 'Loja',
      address: 'Calle D'
    },
    {
      id: 10,
      agency: 'Guayaquil',
      addres: 'Calle E'
    },
    {
      id: 11,
      agency: 'Ambato',
      address: 'Calle A'
    },
    {
      id: 12,
      agency: 'Quito',
      address: 'Calle B'
    },
    {
      id: 13,
      agency: 'Riobamba',
      address: 'Calle C'
    },
    {
      id: 14,
      agency: 'Loja',
      address: 'Calle D'
    },
    {
      id: 15,
      agency: 'Guayaquil',
      addres: 'Calle E'
    },
    {
      id: 16,
      agency: 'Ambato',
      address: 'Calle A'
    },
    {
      id: 17,
      agency: 'Quito',
      address: 'Calle B'
    },
    {
      id: 18,
      agency: 'Riobamba',
      address: 'Calle C'
    },
    {
      id: 19,
      agency: 'Loja',
      address: 'Calle D'
    },
    {
      id: 20,
      agency: 'Guayaquil',
      addres: 'Calle E'
    },
    {
      id: 21,
      agency: 'Ambato',
      address: 'Calle A'
    },
    {
      id: 22,
      agency: 'Quito',
      address: 'Calle B'
    },
    {
      id: 23,
      agency: 'Riobamba',
      address: 'Calle C'
    },
    {
      id: 24,
      agency: 'Loja',
      address: 'Calle D'
    },
    {
      id: 25,
      agency: 'Guayaquil',
      addres: 'Calle E'
    },
    {
      id: 26,
      agency: 'Ambato',
      address: 'Calle A'
    },
    {
      id: 27,
      agency: 'Quito',
      address: 'Calle B'
    },
    {
      id: 28,
      agency: 'Riobamba',
      address: 'Calle C'
    },
    {
      id: 29,
      agency: 'Loja',
      address: 'Calle D'
    },
    {
      id: 30,
      agency: 'Guayaquil',
      address: 'Calle E'
    },
  ];

  /*   listFields: string[] = ['id', 'agency', 'addres']; */

  public metaDataColumns: MetaDataColumn[] = [{
    field: 'id',
    title: 'ID'
  }, {
    field: 'agency',
    title: 'Agencia'
  },
  {
    field: 'address',
    title: 'Dirección'
  }]

  public data!: any[];

  public totalRecords: number = this.recordAgency.length;

  constructor() { }

  ngOnInit(): void {
    this.changePage(0);
  }

  changePage(page: number): void {
    const pageSize = environment.PAGE_SIZE;
    const skip = pageSize * page;
    this.data = this.recordAgency.slice(skip, skip + pageSize);
  }

  openForm(row: any): void { }

  delete(id: number): void { }

}
