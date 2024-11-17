import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { combineLatest, map, shareReplay } from 'rxjs';
import { Profile } from './profile';
import { RecommendationType } from '../shared/recommendations/recommendation-type';
import { Recommendation } from '../shared/recommendations/recommendation';
import { AboutMe } from '../shared/about-me/about-me';
import { Quote } from '../shared/quote/quote';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileUrl ='api/profile';
  private aboutMeUrl ='api/aboutMe';
  private recommendationsUrl = 'api/recommendations';
  private quoteUrl = 'api/quote';

  private http = inject(HttpClient);

  private profileResult$ = this.http.get<Profile>(this.profileUrl)
    .pipe(shareReplay(1));

  private aboutMeResult$ = combineLatest([
    this.profileResult$,
    this.http.get<AboutMe>(this.aboutMeUrl)
  ])
    .pipe(
      map(([{ title, subtitle }, details]) => ({
        title, subtitle, ...details
      })),
      shareReplay(1)
    );
  
  private recommendationsResult$ = this.http.get<Recommendation[]>(this.recommendationsUrl)
    .pipe(
      map(recommendations => recommendations.sort((rA, rB) => rA.type.localeCompare(rB.type))),
      shareReplay(1)
    );

  private recommendationTypesResult$ = this.recommendationsResult$
      .pipe(
        map(recommendations => {
          const recommendationTypes: RecommendationType[] = [];
          recommendations.forEach(r => {
            if (!recommendationTypes.includes(r.type)) recommendationTypes.push(r.type);
          });
          return recommendationTypes;
        }),
        shareReplay(1)
      );

  private quoteResult$ = this.http.get<Quote>(this.quoteUrl)
      .pipe(shareReplay(1));

  private profileResult = toSignal(this.profileResult$);
  private aboutMeResult = toSignal(this.aboutMeResult$);
  private recommendationsResult = toSignal(this.recommendationsResult$);
  private recommendationTypesResult = toSignal(this.recommendationTypesResult$);
  private quoteResult = toSignal(this.quoteResult$);

  profile = computed(() => this.profileResult());
  aboutMe = computed(() => this.aboutMeResult());
  recommendations = computed(() => this.recommendationsResult());
  recommendationTypes = computed(() => this.recommendationTypesResult());
  quote = computed(() => this.quoteResult());

}
