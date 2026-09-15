import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './about/about';
import { Help } from './help/help';

@Component({
  imports: [RouterOutlet, About, Help],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('workshop-app');

  constructor() {
    setTimeout(() => {
      this.title.set('The Timed Title');
      console.log('Hey, I changed the title!');
    }, 5000);
  }

  changeTitle() {
    this.title.set('The New Title');
  }

  sayHello() {
    console.log('Howdy!');
  }

  sayGoodbye() {
    console.log('Bye :-(');
  }
}
