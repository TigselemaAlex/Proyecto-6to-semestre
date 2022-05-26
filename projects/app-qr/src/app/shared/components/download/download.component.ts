import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { MetaDataColumn } from '../../interfaces/metacolumn.interface';

@Component({
  selector: 'qr-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: { data: any[], metaDataColumn: MetaDataColumn[] }) { }

  ngOnInit(): void {
  }
  export(type: string): void {

    let field: string[] = [];
    let head: string[] = [];
    let body: any[] = [];
    let item: any[] = [];
    this.data.metaDataColumn.forEach(element => {
      field.push(element.field);
      head.push(element.title);
    });

    this.data.data.forEach(value => {
      field.forEach(key => {
        item.push(value[key]);
      })
      body.push(item);
      item = [];
    })

    console.log(head);
    if (type === 'excel') {

    }
    else if (type === 'pdf') {

      const doc = new jsPDF();
      autoTable(doc, {
        head: [head],
        body: body
      })
      doc.save('my_table.pdf')
    }
  }

}
