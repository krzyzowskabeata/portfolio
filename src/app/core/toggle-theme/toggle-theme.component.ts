import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { map } from 'rxjs';
import { Theme } from './theme';
import { ToggleThemeService } from './toggle-theme.service';

@Component({
  selector: 'pf-toggle-theme',
  standalone: true,
  imports: [AsyncPipe, MatIconModule, MatSlideToggleModule],
  templateUrl: './toggle-theme.component.html',
  styleUrl: './toggle-theme.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleThemeComponent {

  private toggleThemeService = inject(ToggleThemeService);

  isChecked$ = this.toggleThemeService.theme$
    .pipe(
      map(theme => theme === Theme.Light)
    );

    onChange({ checked: isChecked }: { checked: boolean }): void {
      this.toggleThemeService.setSelectedTheme(isChecked ? Theme.Light : Theme.Dark);
    }
}
