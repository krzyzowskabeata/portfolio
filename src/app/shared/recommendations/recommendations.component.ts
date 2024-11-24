import { Component, Input, Signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { Recommendation } from './recommendation';
import { RecommendationType } from './recommendation-type';

@Component({
  selector: 'pf-recommendations',
  standalone: true,
  imports: [MatCardModule, MatTabsModule],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss'
})
export class RecommendationsComponent {

  @Input({ required: true }) recommendations?: Signal<Recommendation[] | undefined>;
  @Input({ required: true }) recommendationTypes?: Signal<RecommendationType[] | undefined>;

}
