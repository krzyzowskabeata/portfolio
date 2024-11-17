import { Component, inject } from '@angular/core';
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

  private scrollerService = inject(ScrollerService);

  private profileService = inject(ProfileService);
  profile = this.profileService.profile;
  aboutMe = this.profileService.aboutMe;
  recommendations = this.profileService.recommendations;
  recommendationTypes = this.profileService.recommendationTypes;
  quote = this.profileService.quote;

  elementToScroll = ElementToScroll;

  scrollTo(selectedElement: ElementToScroll): void {
    this.scrollerService.scrollToElement(selectedElement);
  }

}
