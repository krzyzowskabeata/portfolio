import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { combineLatest, map, shareReplay } from 'rxjs';
import { Profile } from './profile';
import { ProfileDetails } from './profile-details';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileUrl ='api/profile';
  private profileDetailsUrl ='api/profileDetails';
  private http = inject(HttpClient);

  private profileResult$ = this.http.get<Profile>(this.profileUrl)
    .pipe(shareReplay(1));

  private profileDetailsResult$ = combineLatest([
    this.profileResult$,
    this.http.get<ProfileDetails>(this.profileDetailsUrl)
  ])
    .pipe(
      map(([{ title, subtitle }, details]) => ({
        title, subtitle, ...details
      })),
      shareReplay(1)
    );

  // Info: toSignal will automatically SUBSCRIBE AND UNSUBSCRIBE! It's possible to use initial value here :)
  private profileResult = toSignal(this.profileResult$);
  private profileDetailsResult = toSignal(this.profileDetailsResult$);

  profile = computed(() => this.profileResult());
  profileDetails = computed(() => this.profileDetailsResult());

}
