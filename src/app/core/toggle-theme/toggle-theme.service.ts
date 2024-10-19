import { afterNextRender, Injectable } from '@angular/core';
import { combineLatest, map, Subject } from 'rxjs';
import { Theme } from './theme';

@Injectable({
  providedIn: 'root'
})
export class ToggleThemeService {

  private prefferedThemeSubject = new Subject<Theme>();
  private prefferedTheme$ = this.prefferedThemeSubject.asObservable();

  private selectedThemeSubject = new Subject<Theme | null>();
  private selectedTheme$ = this.selectedThemeSubject.asObservable();

  readonly theme$ = combineLatest([
    this.prefferedTheme$,
    this.selectedTheme$
  ])
    .pipe(
      map(([preffered, selected]) => selected ?? preffered)
    );

  private selectedThemeKey = 'selectedTheme';

  constructor() {
    this.getPrefferedTheme();
    this.getSelectedTheme();
  }
  
  private getPrefferedTheme() {
    afterNextRender(() =>
      this.prefferedThemeSubject.next(
        window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.Dark : Theme.Light
      )
    );
  }

  private getSelectedTheme(): void {
    afterNextRender(() => {
      const selectedTheme = localStorage.getItem(
        this.selectedThemeKey
      );
      this.selectedThemeSubject.next(
        selectedTheme === 'light' ? Theme.Light : selectedTheme === 'dark' ? Theme.Dark : null
      );
    });
  }

  setSelectedTheme(theme: Theme): void {
    localStorage.setItem(this.selectedThemeKey, `${theme}`);
    this.selectedThemeSubject.next(theme);
  }
}
