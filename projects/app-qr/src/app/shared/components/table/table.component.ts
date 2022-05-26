import { Component, ContentChildren, Input, OnInit, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { MetaDataColumn } from '../../interfaces/metacolumn.interface';

interface IData {
  id: number;
  agency: string;
}

@Component({
  selector: 'qr-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

  @Input() public data: any;
  @Input() metaDataColumns!: MetaDataColumn[];

  public columns!: string[];

  /* Identificar la columna extra */
  @ContentChildren(MatColumnDef, { descendants: true }) columnsDef!: QueryList<MatColumnDef>;

  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['metaDataColumns']) {
      this.columns = this.metaDataColumns.map((data) => data.field);
    }


  }
  ngAfterContentInit(): void {
    if (!this.columnsDef) {

      return
    }

    this.columnsDef.forEach(columnDef => {

      this.columns.push(columnDef.name);
      this.table.addColumnDef(columnDef);
    })
  }


}
