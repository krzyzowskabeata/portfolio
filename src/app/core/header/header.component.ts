import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { ToggleThemeComponent } from '../toggle-theme/toggle-theme.component';
import { ScrollerService } from '../scroller.service';
import { ElementToScroll } from '../element-to-scroll';
import { ProfileService } from '../../profile/profile.service';

@Component({
  selector: 'pf-header',
  standalone: true,
  imports: [MatDividerModule, MatIconModule, MatButtonModule, MatMenuModule, MatToolbarModule, RouterLink, ToggleThemeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  // ToDo Should it be in app component?
  private profileService = inject(ProfileService);
  readonly profile = this.profileService.profile;

  private scrollerService = inject(ScrollerService);
  elementToScroll = ElementToScroll;

  scrollTo(selectedElement: ElementToScroll): void {
    this.scrollerService.setElement(selectedElement);
  }

}
