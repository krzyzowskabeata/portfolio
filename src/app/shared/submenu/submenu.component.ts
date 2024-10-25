import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'pf-submenu',
  standalone: true,
  imports: [NgIf, NgTemplateOutlet, MatButtonModule, MatIconModule],
  templateUrl: './submenu.component.html',
  styleUrl: './submenu.component.scss'
})
export class SubmenuComponent {

  @Input() submenuTemplate?: TemplateRef<any>;

}
