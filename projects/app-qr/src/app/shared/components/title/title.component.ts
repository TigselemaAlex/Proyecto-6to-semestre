import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMenu, MenuService } from '../../../services/menu.service';

@Component({
  selector: 'qr-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  public path: IMenu;

  constructor(private menuService: MenuService, private activateRoute: ActivatedRoute) {
    const currentPath = '/' + this.activateRoute.snapshot.pathFromRoot[1].routeConfig?.path;
    this.path = menuService.getMenuByUrl(currentPath);
  }

  ngOnInit(): void {
    console.log(this.path);
  }

}
