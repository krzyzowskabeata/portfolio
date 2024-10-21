import { Component } from '@angular/core';
import { QuoteComponent } from './quote/quote.component';

@Component({
  selector: 'pf-home',
  standalone: true,
  imports: [QuoteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent { }
