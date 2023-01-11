import { Component } from '@angular/core';
import { maskOption } from './maskOptions';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  maskOption = maskOption;
  value;
}
