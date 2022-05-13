import { Component, Input } from '@angular/core';

@Component({
  selector: 'qr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  public expanded: boolean = true;
  title = 'appQR';

  toggleExpanded(expanded: boolean): void {
    this.expanded = expanded;
  }
}
