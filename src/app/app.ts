import { Component, signal } from '@angular/core';
import { Greet } from './greet/greet';
@Component({
  selector: 'app-root',
  imports: [Greet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
