import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgenciasRoutingModule } from './agencias-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    AgenciasRoutingModule,
    SharedModule,
    PerfectScrollbarModule
  ]
})
export class AgenciasModule { }
