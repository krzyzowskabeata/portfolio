import { Component, Input, Signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Quote } from './quote';

@Component({
  selector: 'pf-quote',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {

  @Input({ required: true }) quote?: Signal<Quote | undefined>;

}
