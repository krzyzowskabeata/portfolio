import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'pf-quote',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {

  @Input({ required: true }) quote?: string;
  @Input() author?: string;

}
