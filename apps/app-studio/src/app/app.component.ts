import { NxWelcomeComponent } from './nx-welcome.component';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent],
  selector: 'rep-studio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-studio';
}
