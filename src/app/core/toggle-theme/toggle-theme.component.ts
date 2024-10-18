import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'pf-toggle-theme',
  standalone: true,
  imports: [MatIconModule, MatSlideToggleModule],
  templateUrl: './toggle-theme.component.html',
  styleUrl: './toggle-theme.component.scss'
})
export class ToggleThemeComponent {

  @Input() isChecked?: boolean;

}
