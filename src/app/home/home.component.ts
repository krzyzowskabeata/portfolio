import { Component } from '@angular/core';
import { QuoteComponent } from '../shared/quote/quote.component';
import { ChatComponent } from './chat/chat.component';

@Component({
  selector: 'pf-home',
  standalone: true,
  imports: [ChatComponent, QuoteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  quote = 'We must become the change we want to see';
  author = 'Mahatma Gandhi';
  
}
