import { Injectable, signal } from '@angular/core';
import { ElementToScroll } from './element-to-scroll';

@Injectable({
  providedIn: 'root'
})
export class ScrollerService {

  selectedElement = signal<ElementToScroll | undefined>(undefined);

  setElement(selectedElement: ElementToScroll): void {
    this.selectedElement.set(selectedElement);
  }

}
