import { Component, Input, Signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'pf-about-me',
  standalone: true,
  imports: [MatCardModule, MatExpansionModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  @Input({ required: true }) profileDetails?: Signal<any | undefined>; // ToDo Add type
}
