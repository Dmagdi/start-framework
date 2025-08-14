import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-notfound',
  imports: [RouterOutlet],
  templateUrl: './notfound.html',
  styleUrl: './notfound.css'
})
export class Notfound {
  protected readonly title = signal('app1');
}
