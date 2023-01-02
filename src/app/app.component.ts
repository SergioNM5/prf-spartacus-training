import { Component } from '@angular/core';
import { PRF_ICON_TYPE } from './spartacus/models/icons.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ICON = PRF_ICON_TYPE;
  title = 'perficientcommerce';
}
