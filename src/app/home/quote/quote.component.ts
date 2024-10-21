import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'pf-quote',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {

  quote = 'A year spent in artificial intelligence is enough to make one believe in God.';
  author = 'Alan Perlis';

}
