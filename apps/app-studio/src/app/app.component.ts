import { Component } from '@angular/core';
import {OpenapiEditorModule} from '@rep-studio/openapi-editor';

@Component({
  standalone: true,
  selector: 'rep-studio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    OpenapiEditorModule
  ]
})
export class AppComponent {
  title = 'app-studio';
}
