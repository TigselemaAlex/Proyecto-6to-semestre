import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IMenu, MenuService } from '../../../services/menu.service';

@Component({
  selector: 'qr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output()
  onToogleExpanded: EventEmitter<boolean> = new EventEmitter<boolean>();


  public expanded: boolean = true;

  public listMenu: IMenu[];

  constructor(private menuService: MenuService) {
    this.listMenu = this.menuService.getMenu();
  }

  ngOnInit(): void {
  }

  toogleExpanded(): void {
    this.expanded = !this.expanded;
    this.onToogleExpanded.emit(this.expanded);
  }

}
