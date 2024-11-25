import { Component, Input, Signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Profile } from '../../profile/profile';
import { FrisComponent } from '../fris/fris.component';
import { GallupComponent } from '../gallup/gallup.component';
import { AboutMe } from './about-me';

@Component({
  selector: 'pf-about-me',
  standalone: true,
  imports: [GallupComponent, FrisComponent, MatCardModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  @Input({ required: true }) aboutMe?: Signal<Pick<Profile, 'title' | 'subtitle'> & AboutMe | undefined>;

}
