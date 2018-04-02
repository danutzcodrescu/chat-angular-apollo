import { Component } from '@angular/core';

@Component({
  selector: 'root',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
}
