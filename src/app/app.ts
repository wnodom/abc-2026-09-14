import { Component, signal } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('workshop-app');
}
