import { ViewportScroller } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { ElementToScroll } from '../core/element-to-scroll';
import { ScrollerService } from '../core/scroller.service';
import { QuoteComponent } from '../shared/quote/quote.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ChatComponent } from './chat/chat.component';

@Component({
  selector: 'pf-home',
  standalone: true,
  imports: [AboutMeComponent, ChatComponent, QuoteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  private scroller = inject(ViewportScroller);
  private scrollerService = inject(ScrollerService);

  private selectedElement$ = toObservable(this.scrollerService.selectedElement);
  elementToScroll = ElementToScroll;

  quote = 'We must become the change we want to see';
  author = 'Mahatma Gandhi';

  ngOnInit(): void {
    this.selectedElement$
      .pipe(filter(Boolean))
      .subscribe(element => this.scroller.scrollToAnchor(element));
  }

  scrollTo(selectedElement: ElementToScroll): void {
    this.scrollerService.setElement(selectedElement);
  }
  
}
