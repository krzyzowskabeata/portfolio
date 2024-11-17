import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { ElementToScroll } from '../core/element-to-scroll';
import { ScrollerService } from '../core/scroller.service';
import { ProfileService } from './profile.service';
import { AboutMeComponent } from '../shared/about-me/about-me.component';
import { ChatComponent } from '../shared/chat/chat.component';
import { QuoteComponent } from '../shared/quote/quote.component';
import { RecommendationsComponent } from '../shared/recommendations/recommendations.component';

@Component({
  selector: 'pf-profile',
  standalone: true,
  imports: [AboutMeComponent, ChatComponent, QuoteComponent, RecommendationsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  private scroller = inject(ViewportScroller); // ToDo Can I delegate it to service?
  private scrollerService = inject(ScrollerService);

  private profileService = inject(ProfileService);
  profile = this.profileService.profile;
  aboutMe = this.profileService.aboutMe;
  recommendations = this.profileService.recommendations;
  recommendationTypes = this.profileService.recommendationTypes;
  quote = this.profileService.quote;

  private selectedElement$ = toObservable(this.scrollerService.selectedElement);
  elementToScroll = ElementToScroll;

  ngOnInit(): void {
    this.selectedElement$
      .pipe(filter(Boolean))
      .subscribe(element => this.scroller.scrollToAnchor(element));
  }

  scrollTo(selectedElement: ElementToScroll): void {
    this.scrollerService.setElement(selectedElement);
  }

}
