import { Injectable } from '@angular/core';

export interface IMenu {
  title: string,
  url: string,
  icon: string
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private listMenu: IMenu[] = [
    { title: 'Agencias', url: '/agencias', icon: 'apartment' },
    { title: 'Canales', url: '/canales', icon: 'call_split' },
    { title: 'Clientes', url: '/clientes', icon: 'group' },
    { title: 'Empleados', url: '/empleados', icon: 'badge' },
    { title: 'Quejas y Reclamos', url: '/qr', icon: 'question_mark' },
    { title: 'Seguimiento', url: '/seguimiento', icon: 'query_stats' },
  ]

  constructor() { }

  getMenu(): IMenu[] {
    return [...this.listMenu];
  }

  getMenuByUrl(url: string): IMenu {

    return this.listMenu.find((menu) => {
      return menu.url.toLowerCase() === url.toLowerCase()
    }) as IMenu;
  }

}
