import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'pf-home',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  quote = 'A year spent in artificial intelligence is enough to make one believe in God.';
  author = 'Alan Perlis';

}
