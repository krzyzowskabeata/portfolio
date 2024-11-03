import { Injectable, signal } from '@angular/core';
import { ElementToScroll } from './element-to-scroll';

@Injectable({
  providedIn: 'root'
})
export class ScrollerService {

  // INFO: I use ValueEqualityFn returning false to be always noticed about the change (I'm aware I could use rxjs Subject instead)
  selectedElement = signal<ElementToScroll | undefined>(undefined, { equal: () => false });

  setElement(selectedElement: ElementToScroll): void {
    this.selectedElement.set(selectedElement);
  }

}
