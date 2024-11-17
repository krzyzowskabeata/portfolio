import { ViewportScroller } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { ElementToScroll } from './element-to-scroll';

@Injectable({
  providedIn: 'root'
})
export class ScrollerService {

  private scroller = inject(ViewportScroller);

  scrollToElement(element: ElementToScroll): void {
    this.scroller.scrollToAnchor(element);
  }

}
