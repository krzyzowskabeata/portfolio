import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { ToggleThemeComponent } from '../toggle-theme/toggle-theme.component';


@Component({
  selector: 'pf-header',
  standalone: true,
  imports: [MatDividerModule, MatIconModule, MatButtonModule, MatMenuModule, MatToolbarModule, RouterLink, ToggleThemeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  name = 'Dominik Dobry';
  navItem1 = "About";
  navItem2 = "Contact";

}
