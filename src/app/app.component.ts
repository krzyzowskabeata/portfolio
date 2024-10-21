import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { map } from 'rxjs';
import { HeaderComponent } from './core/header/header.component';
import { ToggleThemeService } from './core/toggle-theme/toggle-theme.service';

@Component({
  selector: 'pf-root',
  standalone: true,
  imports: [AsyncPipe, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private toggleThemeService = inject(ToggleThemeService);

  colorTheme$ = this.toggleThemeService.theme$
    .pipe(
      map(color => `theme-${color}`)
    );

}
